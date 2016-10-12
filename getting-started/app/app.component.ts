import { Component } from '@angular/core';
import { mockBooks } from '../app/mocks/books';
import categories from '../app/mocks/categories';

// Book Type
export class Book {
  title: String;
  cover: String;
  category: String;
}

// TODO: Category Type
export class Category {}

@Component({
  selector: 'bookstore',
  // template: ``,
  templateUrl: '../app/app.template.html'
})

export class AppComponent {
  books: Book [] = mockBooks; // use mocks data instead
  categories: String [] = categories; // use mocks data instead
  currentCategory: String = 'All';
  navClosed: Boolean = true;
  query: String = "";

  selectCategory(category) {
      categories.forEach((category) => { category.selected = false });
      category.selected = true;
      this.currentCategory = category.name;
  }

  search(event){
    this.query = event.target.value;
  }

  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}
