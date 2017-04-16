import { WishlistModel } from './wishlist-model';

export class WishlistService {
    public get(name: string): WishlistModel {
        let wishlist = new WishlistModel();
        wishlist.name = 'test';
        wishlist.title = 'Test Wishlist';

        return wishlist;
    }
}