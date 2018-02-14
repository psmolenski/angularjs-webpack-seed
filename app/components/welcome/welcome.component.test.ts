import { WelcomeComponentController } from "./welcome.component";

it('should add one', () => {
    const controller = new WelcomeComponentController();
    expect(controller.addOne(2)).toEqual(3);
})