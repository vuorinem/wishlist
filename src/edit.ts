import { autoinject } from 'aurelia-framework';
import { RoutableComponentActivate } from 'aurelia-router';
import { WishlistService } from './resources/wishlist/wishlist-service';
import { WishlistModel } from './resources/wishlist/wishlist-model';

@autoinject
export class Edit implements RoutableComponentActivate {

    private wishlist: WishlistModel;

    constructor(private wishlistService: WishlistService) {
    }

    public async activate(params: { name?: string }) {
        if (params.name) {
            this.wishlist = await this.wishlistService.get(params.name);
        } else {
            this.wishlist = new WishlistModel();
        }
    }

}
