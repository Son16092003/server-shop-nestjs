import { ItemModel } from "../models/item.model";

export interface ItemState {
    item: ItemModel[],
    isSuccess : boolean,
    error: string,
    loading : boolean
}