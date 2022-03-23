import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingrediennt } from 'src/app/recipes/recipe.interface';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name:string;
  amount:string;

  selectedIngredient:Ingrediennt;

  @Output() addIngredient: EventEmitter<Ingrediennt> = new EventEmitter<Ingrediennt>();
  @Output() deleteIngredient: EventEmitter<Ingrediennt> = new EventEmitter<Ingrediennt>();
  @Output() clearIngredients: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.addIngredient.emit({name: this.name, amount:this.amount});
    this.name="";
    this.amount="";
  }

  onDelete(){
    this.deleteIngredient.emit(this.selectedIngredient);
  }

  onClear(){
    this.clearIngredients.emit();
  }

}
