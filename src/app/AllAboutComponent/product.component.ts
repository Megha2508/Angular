import { Component } from '@angular/core';
import { Product } from './myproduct';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'prod-comp',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
    title:string="This is product component"
    obj:Product=null;
    obj1:Product=null;
    obj2:Product=null;
    constructor(private activatedRoute: ActivatedRoute)
    {
      this.obj=new Product(1,'aaaa',4,2450);
      this.obj1=new Product(2,'bbbb',1,1450);
      this.obj2=new Product(3,'cccc',3,450);
    }
    id:any;
    paramsSub:any
    public selectedTr:string
    
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