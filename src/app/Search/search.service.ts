import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { SearchItem } from "./SearchItem";
import { Promise } from 'es6-promise'

@Injectable()

export class SearchService{
    apiroot:string='https://itunes.apple.com/search'
    results:Object[]
    loading:boolean
    
    constructor(private http:Http){
        this.results=[]
        this.loading=false
    }

    search(term:string){
        let promise= new Promise((resolve,reject)=>
        {
            let apiURL=`${this.apiroot}?term=${term}&media=music&limit=20`
            this.http.get(apiURL)
            .toPromise()
            .then(
                res=>{
                    this.results=res.json().results.map(item=>{
                        return new SearchItem(
                            item.trackname,
                            item.artistName,
                            item.trackViewUrl,
                            item.artworkUrl30,
                            item.artistId
                        )
                    })
                    resolve()
                },
                msg=>{
                    reject(msg)
                }
            )
        })
        return promise
    }
}