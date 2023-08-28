export interface ItemType {
    rarity: string,
    name: string,
    image: string,
    type: string,
    modifier: string,
    quantity?: number,
}

export interface PerkType {
    name: string,
    image: string,
    character: string,
}

export interface SurvivorType {
    id: string,
    name: string,
    role: string,
    image: string,
    disabled?: boolean,
}