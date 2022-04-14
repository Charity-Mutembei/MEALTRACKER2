export class Meals {
    name: string;
    meal: string;
    description: string;
    calories: number;

    constructor(name: string, meal:string, description:string, calories:number){
        this.name = name;
        this.meal = meal;
        this.description = description;
        this.calories = calories;
    }

}
