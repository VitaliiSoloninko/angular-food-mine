import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,

  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input()
  stars: number = 0;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    };
  }

  getStarImage(current: number): string {
    const previousHaft = current - 0.5;
    const imageName =
      this.stars >= current
        ? 'star-full'
        : this.stars >= previousHaft
        ? 'star-haft'
        : 'star-empty';
    return `/assets/stars/${imageName}.svg`;
  }
}
