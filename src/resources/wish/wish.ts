import { bindable } from 'aurelia-framework';
import { WishModel } from './wish-model';

export class Wish {

    @bindable wish: WishModel;
    @bindable canEdit: boolean = false;

    private isEditing: boolean = false;

    private edit() {
        this.isEditing = !this.isEditing;
    }

}
