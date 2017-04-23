import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { WishModel } from './wish-model';
import { WishService } from './wish-service';

@autoinject
export class Wish {

    @bindable wish: WishModel;
    @bindable canEdit: boolean = false;

    private isEditing: boolean = false;

    @computedFrom('canEdit', 'wish.isReserved')
    private get canReserve(): boolean {
        return !this.canEdit;
    }

    constructor(private wishService: WishService) {
    }

    private edit() {
        if (this.isEditing) {
            this.wishService.save(this.wish)
                .then(() => this.isEditing = false);

        } else {
            this.isEditing = true;
        }
    }

    private reserve() {
        this.wishService.reserve(this.wish)
            .then(() => this.wish.isReserved = true);
    }

}
