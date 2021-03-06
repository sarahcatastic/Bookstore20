import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";
import {BookStoreService} from "../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shared/authentication.service";

@Component({
  selector: 'bs-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent{

  book:Book;

  constructor(
      private bs:BookStoreService,
      private route:ActivatedRoute,
      private router: Router,
      public authService: AuthService) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
      this.bs.getSingle(params['isbn']).subscribe(b => this.book = b);
  }

  getRating(num:Number){
    return new Array(num);
  }

  removeBook() {
      if (confirm('Buch wirklich löschen?')) {
          this.bs.remove(this.book.isbn).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
      }

  }
}
