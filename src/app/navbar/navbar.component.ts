import { Component } from '@angular/core';
import { SearchResultsComponent } from "../search-results/search-results.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchResultsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    [x: string]: any;

  
  
  





    //? this is just so no one adds a naked input in the search bar and it functioning
    //? all it does is just make sure the searchBarInput is not empty
    searchBarCheck(){
      const searchBarInput = document.querySelector(".search") as HTMLInputElement;


      if(searchBarInput!.value === ""){
        alert('enter text into the text box, not that hard :|')
      } else{
        addHistory();
      }
    }



}

function addHistory(){
  //? grab elements to use
  const searchBarInput = document.querySelector(".search") as HTMLInputElement;
  const historyList = document.querySelector('.SearchHistory');


  //? create Div, give it a class of history Item, give it the value of the search bar, and append it to the list
  let newHistoryList = document.createElement('div');
  newHistoryList.className = "HistoryItem"
  newHistoryList.textContent = searchBarInput!.value;
  historyList!.appendChild(newHistoryList);
}