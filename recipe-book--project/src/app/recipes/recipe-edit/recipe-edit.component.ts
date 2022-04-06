import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
                route.data.subscribe((data)=>{
                  data[0].forEach(item => recipeService.recipe = item)
                })
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    this.recipeForm.value['ingredient'].map(element => {
      element.amount = `${element.amount} kg`;
    })
    const newRecipe: Recipe = {
      name: this.recipeForm.value['name'],
      description: this.recipeForm.value['description'],
      imagePath:this.recipeForm.value['imagePath'],
      ingredient:this.recipeForm.value['ingredient'],
      id: this.id
    }
    this.recipeService.recipe = newRecipe;
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredient')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredient']) {
        for (let ingredient of recipe.ingredient) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount.split(' ')[0], [
                Validators.required,
                Validators.min(1)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredient': recipeIngredients
    });
  }

}
