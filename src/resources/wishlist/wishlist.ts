import { bindable } from 'aurelia-framework';
import { WishlistModel } from './wishlist-model';

export class Wishlist {

    @bindable private wishlist: WishlistModel;

}