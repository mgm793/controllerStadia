import { StadiaButtons, keyMapping } from "./keyMapping";

export class StadiaController {
  private controllerID : number | undefined;
  constructor(private callbacks: Partial<Record<StadiaButtons, (
    value?: number | number[] | {
    name: StadiaButtons, value: number | number[]
  }) => void>>){
    if(!('getGamepads' in navigator)){
      console.error('STADIA CONTROLLER: Your navigator does not accept controllers');
    }
    else{
      window.addEventListener("gamepadconnected", (e) => {
        this.controllerID = e.gamepad.index;
      });
      window.addEventListener("gamepaddisconnected", () => {
        this.controllerID = undefined;
      });
      this.eventHandler();
    }
  }
  private checkButtons(buttons: readonly GamepadButton[]){
    for(let i = 0; i < buttons.length; ++i){
      const button = buttons[i];
      if(button.pressed) {
        const name = keyMapping.get(i);
          if(!name) {
            return;
          }
        this.callbacks[name]?.(button.value);
        this.callbacks.all?.({name, value: button.value});
      }
    }
  }

  private checkSticks(sticks: readonly number[]){
    const [ leftX, leftY, rightX, rightY ] = sticks;
    if(!leftX && !leftY && !rightX && !rightY) return;
    if(leftX || leftY) {
      this.callbacks.leftStick?.([leftX, leftY]);
      this.callbacks.all?.({name: 'leftStick', value: [leftX, leftY]});
    }
    if(rightX || rightY) {
      this.callbacks.rightStick?.([rightX, rightY]);
      this.callbacks.all?.({name: 'rightStick', value: [rightX, rightY]});
    }
  }

  private eventHandler = () => {
    if(this.controllerID !== undefined){
      const controller = navigator.getGamepads()[this.controllerID];
      if(controller?.buttons) this.checkButtons(controller.buttons);
      if(controller?.axes) this.checkSticks(controller.axes);
    }
    requestAnimationFrame(this.eventHandler);
  }
}