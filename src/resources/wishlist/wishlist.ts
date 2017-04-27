import { autoinject, bindable, TaskQueue } from 'aurelia-framework';
import { WishlistModel } from './wishlist-model';
import { WishModel } from '../wish/wish-model';
import { Wish } from '../wish/wish';

@autoinject
export class Wishlist {

    @bindable private wishlist: WishlistModel;
    @bindable canEdit: boolean = false;

    private wishComponents: Wish[] = [];

    constructor(private taskQueue: TaskQueue) {
    }

    private deleteWish(wish: WishModel) {
        this.wishlist.wishes.splice(this.wishlist.wishes.indexOf(wish), 1);
    }

    private addWish() {
        this.wishlist.wishes.push(new WishModel());

        this.taskQueue.queueTask(() => {
            this.wishComponents[this.wishlist.wishes.length - 1].startEdit();
        });
    }

}
