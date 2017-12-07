import { Component } from '@angular/core';

@Component({
  selector: 'suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent {

  search_term = "";

  changeSearchTerm(search_term){
    this.search_term = search_term;
  }

}
