//these should become types with determined values since a card cannot have any string as value for race,type etcc...

// Interface representing the core properties of a card
export interface ICard {
    id: number
    name: string
    type: string
    frameType: string
    desc: string
    atk?: number
    def?: number
    level?: number
    race?: string
    scale?: string
    attribute?: string
    linkval?: number
    linkmarkers?: string[]
    archetype?: string
    card_sets: ICardSet[]
    card_images: ICardImage[]
    card_prices: ICardPrice[]
    banlist_info?: IBanlistInfo
}

// Interface representing the card set details
export interface ICardSet {
    set_name: string
    set_code: string
    set_rarity: string
    set_rarity_code: string
    set_price: string
}

// Interface representing the card images
export interface ICardImage {
    id: number
    image_url: string
    image_url_small: string
    image_url_cropped: string
}

// Interface representing the card prices
export interface ICardPrice {
    cardmarket_price: string
    tcgplayer_price: string
    ebay_price: string
    amazon_price: string
    coolstuffinc_price: string
}

export interface IBanlistInfo {
    ban_tcg: string, //should become types of their own
    ban_ocg: string
}