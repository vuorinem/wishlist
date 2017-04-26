import { bindable } from 'aurelia-framework';
import { WishlistModel } from './wishlist-model';
import { WishModel } from '../wish/wish-model';

export class Wishlist {

    @bindable private wishlist: WishlistModel;
    @bindable canEdit: boolean = false;

    private deleteWish(wish: WishModel) {
        this.wishlist.wishes.splice(this.wishlist.wishes.indexOf(wish), 1);
    }

    private addWish(){
        this.wishlist.wishes.push(new WishModel());
    }

}
