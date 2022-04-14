import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Meals } from  '../meals'
// import { MealFormComponent } from '../meal-form/meal-form.component';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  // @Input () meal: Meals;
  
  meals: Meals [] = [

  ];
  // newMeal = new Meals("","","",0);
//  in our meal.component.html, this "addNewGoal" function was not define when linking the form 
// so we come in its .ts to make sure the code works and everything belongs to this family 
  addNewMeals(meal:any){
    let mealLength = this.meals.length;
    meal.id = mealLength+1;
    // goal.completeDate = new Date(goal.completeDate)
    this.meals.push(meal);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
