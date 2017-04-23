import { WishModel } from './wish-model';

export class WishService {
    public async getAll(wishlistName: string): Promise<WishModel[]> {
        return await [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(this.createSampleWish);
    }

    private createSampleWish(index: number): WishModel {
        let imgHeight = Math.round(Math.random() * 20) * 10 + 100;

        return new WishModel({
            title: 'Sample Wish ' + index,
            description: 'This is a sample wish with simple description',
            imgSrc: `http://placehold.it/300x${imgHeight}`,
        })
    }
}
