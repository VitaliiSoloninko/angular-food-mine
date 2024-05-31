import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  search(arg0: string) {
    throw new Error('Method not implemented.');
  }
  // searchTerm = '';

  // constructor(activatedRoute: ActivatedRoute, private router: Router) {
  //   activatedRoute.params.subscribe((params) => {
  //     if (params.searchTerm) this.searchTerm = params.searchTerm;
  //   });
  // }

  ngOnInit(): void {}

  // search(term: string): void {
  //    if (term) this.router.navigateByUrl('/search/' + term);
  // }
}
