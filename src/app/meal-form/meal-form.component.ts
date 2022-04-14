import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meals } from '../meals';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
  // Meals = any
  newMeal = new Meals("","","",0);
  @Output () addMeals = new EventEmitter<Meals>();

  // we created a new function called addMeals which emmits
  //  an event of the type Meals(like the class) which feeds
  //  in parent component {the component} which is in the ngSubmit 
  // function in the form head! so we inform the parent about the addMeals output= check the html plus of the form  in the component.


  submitMeals(){
    this.addMeals.emit(this.newMeal);
    this.newMeal = new Meals("","","",0);
    console.log('newMeal');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
