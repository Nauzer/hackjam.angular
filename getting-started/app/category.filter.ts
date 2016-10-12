import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './app.component';

@Pipe({name: 'categoryFilter'})
export class CategoryFilterPipe implements PipeTransform {
    transform(books: Book [], category: string): Book [] {
        if(category === 'All') {
            return books;
        } else {
            return books.filter((book) => {
                return book.category === category
            });
        }
    }
}