import { bindable, computedFrom } from 'aurelia-framework';
import { WishModel } from './wish-model';

export class Wish {

    @bindable wish: WishModel;
    @bindable canEdit: boolean = false;

    private isEditing: boolean = false;

    @computedFrom('canEdit')
    private get canReserve(): boolean {
        return !this.canEdit;
    }

    private edit() {
        this.isEditing = !this.isEditing;
    }

    private reserve() {
        throw Error('Not Implemented');
    }

}
