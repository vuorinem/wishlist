import { computedFrom } from 'aurelia-framework';

export class WishModel {
    public wishlistName: string;
    public id: number;
    public title: string;
    public description: string;
    public imgSrc: string;
    public isReserved: boolean;

    @computedFrom('id')
    public get isNew(): boolean {
        return !this.id;
    }

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
