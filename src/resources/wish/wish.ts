import { bindable } from 'aurelia-framework';
import { WishModel } from './wish-model';

export class Wish {

    @bindable wish: WishModel;
    @bindable canEdit: boolean = false;

}