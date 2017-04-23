import { autoinject, bindable, computedFrom } from 'aurelia-framework';
import { WishModel } from './wish-model';
import { WishService } from './wish-service';

@autoinject
export class Wish {

    @bindable wish: WishModel;
    @bindable canEdit: boolean = false;
    @bindable onDelete: ({ wish: WishModel }) => void;

    private isEditing: boolean = false;

    @computedFrom('canEdit', 'wish.isReserved')
    private get canReserve(): boolean {
        return !this.canEdit;
    }

    constructor(private wishService: WishService) {
    }

    private async edit() {
        if (this.isEditing) {
            await this.wishService.save(this.wish);
            this.isEditing = false;
        } else {
            this.isEditing = true;
        }
    }

    private async reserve() {
        await this.wishService.reserve(this.wish);
        this.wish.isReserved = true;
    }

    private async delete() {
        await this.wishService.delete(this.wish);

        if (this.onDelete) {
            this.onDelete({ wish: this.wish });
        }
    }

}
