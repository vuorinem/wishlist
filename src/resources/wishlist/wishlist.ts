import { autoinject, bindable, TaskQueue } from 'aurelia-framework';
import { WishlistService } from './wishlist-service';
import { WishlistModel } from './wishlist-model';
import { WishModel } from '../wish/wish-model';

@autoinject
export class Wishlist {

    @bindable name: string;
    @bindable canEdit: boolean = false;

    private wishlist: WishlistModel;

    constructor(private wishlistService: WishlistService) {
    }

    public async nameChanged() {
        if (this.name) {
            this.wishlist = await this.wishlistService.get(this.name);
        } else {
            this.wishlist = new WishlistModel();
        }
    }

    private deleteWish(wish: WishModel) {
        this.wishlist.wishes.splice(this.wishlist.wishes.indexOf(wish), 1);
    }

    private addWish() {
        this.wishlist.wishes.push(new WishModel());
    }

}
