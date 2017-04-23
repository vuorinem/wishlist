import { WishModel } from './wish-model';

export class WishService {
    public async getAll(wishlistName: string): Promise<WishModel[]> {
        return await [
            new WishModel({
                title: 'Wish 1',
                imgSrc: 'http://placehold.it/300x300',
            }),
            new WishModel({
                title: 'Wish 2',
                imgSrc: 'http://placehold.it/300x200',
            }),
            new WishModel({
                title: 'Wish 3',
                imgSrc: 'http://placehold.it/300x100',
            }),
            new WishModel({
                title: 'Wish 4',
                imgSrc: 'http://placehold.it/300x150',
            }),
            new WishModel({
                title: 'Wish 5',
                imgSrc: 'http://placehold.it/300x250',
            }),
            new WishModel({
                title: 'Wish 6',
                imgSrc: 'http://placehold.it/300x220',
            }),
            new WishModel({
                title: 'Wish 7',
                imgSrc: 'http://placehold.it/300x300',
            }),
            new WishModel({
                title: 'Wish 8',
                imgSrc: 'http://placehold.it/300x250',
            }),
            new WishModel({
                title: 'Wish 9',
                imgSrc: 'http://placehold.it/300x220',
            }),
            new WishModel({
                title: 'Wish 10',
                imgSrc: 'http://placehold.it/300x300',
            }),
        ];
    }
}