import { WishlistModel } from './wishlist-model';

export class WishlistService {
    public async get(name: string): Promise<WishlistModel> {
        let wishlist = new WishlistModel();
        wishlist.name = 'test';
        wishlist.title = 'Test Wishlist';

        return await wishlist;
    }
}