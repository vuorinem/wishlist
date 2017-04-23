export class WishModel {
    public title: string;
    public description: string;
    public imgSrc: string;
    public isReserved: boolean;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
