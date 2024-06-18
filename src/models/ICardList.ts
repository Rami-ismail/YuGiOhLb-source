import { ICard } from "./ICard";
import { IMetaRequestData } from "./IMetaRequestData";

export interface ICardList {
    data: ICard[]
    meta?: IMetaRequestData
}

