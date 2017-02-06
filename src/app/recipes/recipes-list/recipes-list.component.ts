import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: 'recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe("Dummy Recipe", "This is how you make Dummy ", "http://blog.caranddriver.com/wp-content/uploads/2016/06/BMWM2GranCoupe.jpg");

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
    console.log("Selected");
  }
}
