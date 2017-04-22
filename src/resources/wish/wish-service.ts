import { WishModel } from './wish-model';

export class WishService {
    public async getAll(wishlistName: string): Promise<WishModel[]> {
        return await [
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