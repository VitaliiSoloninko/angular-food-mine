import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
  standalone: false,
})
export class NotFoundComponent implements OnInit {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = 'Nothing Found';
  @Input()
  resetLinkText = 'Reset';
  @Input()
  resetLinkRoute = '/';

  ngOnInit(): void {}
}
