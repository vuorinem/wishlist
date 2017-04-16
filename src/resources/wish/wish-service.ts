import { WishModel } from './wish-model';

export class WishService {
    getAll(wishlistName: string) {
        return [
            new WishModel({
                title: 'Wish 1',
            }),
            new WishModel({
                title: 'Wish 2',
            }),
            new WishModel({
                title: 'Wish 3',
            }),
        ];
    }
}