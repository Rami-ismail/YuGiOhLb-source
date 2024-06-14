import { Attribute } from "../common/Attributes";

export interface Card {
    name: String,
    id: String,
    type: String,
    attribute: Attribute
}