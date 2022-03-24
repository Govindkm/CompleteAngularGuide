export interface Ingrediennt{
    name: string,
    amount: string,
}

export interface Recipe{
    name: string,
    description: string,
    imagePath?: string;
    ingredient?: Ingrediennt[]
}