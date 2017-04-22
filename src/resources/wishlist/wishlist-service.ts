import { autoinject } from 'aurelia-framework';
import { WishlistModel } from './wishlist-model';
import { WishService } from '../wish/wish-service';

@autoinject
export class WishlistService {
    constructor(private wishService: WishService) {
    }

    public async get(name: string): Promise<WishlistModel> {
        let wishlist = new WishlistModel();
        wishlist.name = 'test';
        wishlist.title = 'Test Wishlist';

        wishlist.wishes.push(...await this.wishService.getAll('test'));

        return await wishlist;
    }
}