import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  arrayOfCategories:any[]=[];
  products : any[] =[]
  categoryObject: any[]=[]
  lastObject:any[]=[]


  constructor(private menuData:MenuService) { }

  ngOnInit(): void {

    this.menuData.getMenu().subscribe((prods) => {
       
      this.products.push(prods);
     console.log(this.products);
     
     this.sortData()
    
      });
  }

  sendValueIntoService(value: any) {
    this.menuData.setdata(value);
}

   
  sortData(){

    for(let item of this.products[0].data) {

      if(this.arrayOfCategories.find(e=>e === item.category)){
        
      }else{
        this.arrayOfCategories.push(item.category)
      console.log(this.arrayOfCategories)
      }
    }

    for(let category of this.arrayOfCategories) {
       for (let item of this.products[0].data){
        if(category === item.category){
          console.log(category)
          console.log(item.category)
         this.categoryObject.push({
          "price":item.price,"dishName":item.dishName, "discription":item.discription
           
         })
        }
       }
      
       this.lastObject.push({
         "category":category,"details":this.categoryObject
       })
       this.categoryObject=[]
    }

    console.log(this.categoryObject)
    console.log(this.lastObject)
    /* menuCategories:{
    category:[{
        name:String,
        details:[{
         dishName: {type:String},
         discription: {type:String},
         price: {type:String},
         image: {type:String}
        }]
    }]
}  */
  }
}
