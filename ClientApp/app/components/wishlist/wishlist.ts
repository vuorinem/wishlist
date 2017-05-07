import { autoinject, bindable, TaskQueue } from 'aurelia-framework';
import { WishlistService } from './wishlist-service';
import { WishlistModel } from './wishlist-model';
import { WishService } from '../wish/wish-service';
import { WishModel } from '../wish/wish-model';

@autoinject
export class Wishlist {

    @bindable name: string;
    @bindable canEdit: boolean = false;

    private wishlist: WishlistModel;
    private wishes: WishModel[];

    constructor(
        private wishlistService: WishlistService,
        private wishService: WishService) {
    }

    public async nameChanged() {
        if (this.wishlist) {
            await this.wishlistService.save(this.wishlist);
        }

        if (this.name) {
            this.wishlist = await this.wishlistService.get(this.name);
            this.wishes = await this.wishService.getAll(this.name);
        } else {
            this.wishlist = new WishlistModel();
            this.wishes = [];
        }
    }

    private deleteWish(wish: WishModel) {
        this.wishes.splice(this.wishes.indexOf(wish), 1);
    }

    private addWish() {
        const wish = new WishModel();

        wish.wishlistName = this.wishlist.name;

        this.wishes.push(wish);
    }

}
