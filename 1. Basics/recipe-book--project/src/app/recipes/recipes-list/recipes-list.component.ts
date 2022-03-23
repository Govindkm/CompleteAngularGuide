import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() selectRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    {
    name:'Samosa', 
    description: 'A samosa is a fried or baked pastry with a savory filling.', 
    imagePath:'https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900'
    },
    {
      name:'litti chokha',
      description: 'Litti, along with chokha, is a complete meal.',
      imagePath: 'https://static.toiimg.com/thumb/53188495.cms?width=1200&height=900'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
