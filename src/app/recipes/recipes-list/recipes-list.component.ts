import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { Recipe } from '../recipe.interface';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  unsubscribeNotifier = new Subject()
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.recipeService.recipes
    .pipe(takeUntil(this.unsubscribeNotifier))
    .subscribe((data)=>{
      this.recipes = data;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeNotifier.next(null);
    this.unsubscribeNotifier.complete();
  }
}
