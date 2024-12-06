import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false,
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodObservalbe: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodObservalbe = this.foodService.getAllFoodBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        foodObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      else foodObservalbe = foodService.getAll();

      foodObservalbe.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {}
}
