import { Component } from "@angular/core";
import { SearchService } from "./search.service";

@Component({
    selector: 'search-app',
    template:`
    <form class="form-inline">
      <div class="form-group">
        <input type="search" class="form-control" placeholder="Enter your term" #search>
      </div>
      <button class="btn btn-primary" (click)="doSearch(search.value)"> 
      Search</button>
    </form>
    <div class="text-center">
    <p class="lead" *ngIf="loading">Loading...</p>
    </div>
    <ul class="list-group">
        <li class="list-group-item"
            *ngFor="let track of itunes.results">
            <img src="{{track.thumbnail}}">
            <a target="_blank"
                href="{{track.link}}">{{track.name}}
            </a>
        </li>
    </ul>`
})

export class SearchComponent{
    private loading:boolean=false
    constructor(private itunes:SearchService){ }

    doSearch(term:string){
        this.loading=true
        this.itunes.search(term).then( ()=>this.loading=false)
    }
}