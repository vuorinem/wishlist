export class WishModel {
    public title: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
}