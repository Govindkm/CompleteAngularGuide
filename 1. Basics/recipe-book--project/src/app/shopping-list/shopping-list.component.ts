import { Component, OnInit } from '@angular/core';
import { Ingrediennt } from '../recipes/recipe.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingrediennt[] = [
    {
      name:'Potato',
      amount:"2 kg"
    },
    {
      name:'Tomato',
      amount:'1 kg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
