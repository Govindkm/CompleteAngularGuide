import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingrediennt } from 'src/app/recipes/recipe.interface';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  name:string;
  amount:string;

  Ingredient:Ingrediennt = {name:'', amount:''};
  subcriptions:Subscription[] = [];

  @Output() addIngredient: EventEmitter<Ingrediennt> = new EventEmitter<Ingrediennt>();
  @Output() deleteIngredient: EventEmitter<Ingrediennt> = new EventEmitter<Ingrediennt>();
  @Output() clearIngredients: EventEmitter<null> = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subcriptions.push(this.shoppingListService.selectedIngredient.subscribe((data)=>{
      this.Ingredient=data;
    }))
  }

  onAdd(shoppingListForm:NgForm){
    if(shoppingListForm.valid){
      this.addIngredient.emit(this.Ingredient);
      this.Ingredient={name:'', amount:''};
    }
    
  }

  onDelete(){
   if(this.Ingredient){
    this.deleteIngredient.emit(this.Ingredient);
    this.Ingredient={name:'', amount:''};
   }
  }

  onClear(){
    this.clearIngredients.emit();
    this.Ingredient={name:'', amount:''};
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach((subs)=>subs.unsubscribe());
  }

}
