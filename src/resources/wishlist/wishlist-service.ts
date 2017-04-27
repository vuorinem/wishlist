import { WishlistModel } from './wishlist-model';

export class WishlistService {
    public async get(name: string): Promise<WishlistModel> {
        const wishlistJson = localStorage.getItem(`wishlist/${name}`);

        if (wishlistJson) {
            return await new WishlistModel(JSON.parse(wishlistJson));
        }

        const wishlist = new WishlistModel();
        wishlist.name = name;

        return await wishlist;
    }

    public async save(wishlist: WishlistModel) {
        await localStorage.setItem(`wishlist/${name}`, JSON.stringify(wishlist));
    }
}
