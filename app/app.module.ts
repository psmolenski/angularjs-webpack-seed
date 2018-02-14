import * as angular from "angular";
import welcomeComponent from './components/welcome/welcome.component';

export default angular.module('app', [])
    .component('welcome', welcomeComponent);