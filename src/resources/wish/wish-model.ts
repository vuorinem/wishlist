export class WishModel {
    public title: string;
    public description: string;
    public imgSrc: string;
    public isReserved: boolean;

    public isNew: boolean;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
            this.isNew = false;
        } else {
            this.isNew = true;
        }
    }
}
