import { WishModel } from '../wish/wish-model';

export class WishlistModel {
    public name: string;
    public title: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
