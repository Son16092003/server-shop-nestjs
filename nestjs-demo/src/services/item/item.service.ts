import { Injectable } from '@nestjs/common';
import { ItemModel } from 'src/model/item.model';

@Injectable()
export class ItemService {
    items: ItemModel[] = [
        {
            id: 1,
            name: 'Thời trang nam',
            description: 'Chất lượng cao'
        },
        {
            id: 2,
            name: 'Áo Unisex',
            description: 'Chất lượng cao'
        },
        {
            id: 3,
            name: 'Thời trang nam',
            description: 'Chất lượng cao'
        },
    ]

    getAllItems(){
        return this.items;
    }

    getItemById(id: number){
        return this.items.find((item) => item.id == id);
    }

    createItem(item: ItemModel){
        this.items.push(item)
        return {message: 'Created successfully!'}
    }

    updateItem(updateItem: ItemModel): { message: string; }{
        let tempIndex = this.items.findIndex((item) => item.id == updateItem.id);
        this.items[tempIndex] = updateItem;
        return { message: 'Updated Successfully!'}
    }

    deleteItemById(id: number){
        let tempIndex = this.items.findIndex((item) => item.id == id);
        console.log(tempIndex)
        if(tempIndex) {
            return 'Khong tim thay';
        }
        this.items.splice(tempIndex, 1);
    }
}
