import {Pipe, PipeTransform} from '@angular/core';
import {Book} from './app.component';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
    transform(books: Book [], query: string): Book [] {
        return books.filter((book) => {
            return book.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
    }
}