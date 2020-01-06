import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'about-item',
  templateUrl: './aboutitem.component.html'
})
export class AboutItemComponent {
    id:any;
    paramsSub:any
    public selectedTr:string
    constructor(private activatedRoute: ActivatedRoute) {}
    
    private ngOnInit() {
        this.paramsSub=this.activatedRoute.params.subscribe(
            params => {
                this.selectedTr=params['id']
            })
    }

    ngOnDestroy(){
        this.paramsSub.unsubscribe()
    }
}
