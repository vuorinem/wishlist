export class WishModel {
    public title: string;
    public description: string;
    public imgSrc: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
