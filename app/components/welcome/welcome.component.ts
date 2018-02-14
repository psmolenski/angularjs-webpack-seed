import tpl from './welcome.component.html';
import './welcome.component.less'

export class WelcomeComponentController {
    addOne(value : number) : number {
        return value + 1;
    }
}

export default {
    template: tpl,
    controller: WelcomeComponentController,
    bindings: {
        name: '@'
    }
}