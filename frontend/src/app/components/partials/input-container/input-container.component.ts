import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css',
  standalone: false,
})
export class InputContainerComponent {
  @Input()
  label!: string;
  @Input()
  bgColor = 'white';
}
