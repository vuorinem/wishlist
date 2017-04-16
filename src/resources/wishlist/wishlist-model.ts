import { WishModel } from '../wish/wish-model';

export class WishlistModel {
    public name: string;
    public title: string;

    public wishes: WishModel[] = [];

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}