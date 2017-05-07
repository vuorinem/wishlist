import { WishModel } from './wish-model';

export class WishService {
    public async getAll(wishlistName: string): Promise<WishModel[]> {
        const wishesJson = localStorage.getItem(`wishlist/${wishlistName}/wishes`);

        if (wishesJson) {
            const wishes: any[] = JSON.parse(wishesJson);

            return await wishes.map(data => new WishModel(data));
        }

        return await [];
    }

    public async save(wish: WishModel): Promise<void> {
        const wishes = await this.getAll(wish.wishlistName);

        if (wish.id) {
            const storedWish = wishes.find(i => i.id === wish.id);
            Object.assign(storedWish, wish);
        } else {
            wish.id = wishes.length + 1;
            wishes.push(wish);
        }

        localStorage.setItem(`wishlist/${wish.wishlistName}/wishes`, JSON.stringify(wishes));
    }

    public async reserve(wish: WishModel): Promise<void> {
        const wishes = await this.getAll(wish.wishlistName);

        const storedWish = wishes.find(i => i.id === wish.id);
        storedWish.isReserved = true;

        localStorage.setItem(`wishlist/${wish.wishlistName}/wishes`, JSON.stringify(wishes));
    }

    public async delete(wish: WishModel): Promise<void> {
        const wishes = await this.getAll(wish.wishlistName);

        wishes.splice(wishes.findIndex(i => i.id === wish.id), 1);

        localStorage.setItem(`wishlist/${wish.wishlistName}/wishes`, JSON.stringify(wishes));
    }
}
