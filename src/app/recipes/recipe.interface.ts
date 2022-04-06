export interface Ingrediennt{
    name: string,
    amount: string,
}

export interface Recipe{
    id:string,
    name: string,
    description: string,
    imagePath?: string;
    ingredient?: Ingrediennt[]
}