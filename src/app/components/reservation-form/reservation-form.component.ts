import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  addFbuilder
  formValues:any [] = []
  submitted= false
  users:any[]=[]
  facebookError:any
  ageError: any;
  fbError:any;
  aError:any;
  

  constructor(private fb: FormBuilder,
              private menuService:MenuService,
              private router:Router ) { 

    this.addFbuilder = this.fb.group({

      name:[,[Validators.required, Validators.minLength(6)]],
      email: ['',[Validators.email]],
      phone:['',[Validators.minLength(11),Validators.maxLength(11)]],
      phone2:['',[Validators.minLength(11),Validators.maxLength(11)]],
      age:['',[Validators.required]],
      noOfPersons:['',Validators.required],
      facebookLink:['',Validators.required],
      date:['',Validators.required]
    
    })
  }

  ngOnInit(): void {

  }
  //to transfer data between service and component
  sendValueIntoService(value: any) {
    this.menuService.setdata(value);
}

  onFormSubmit(){
    console.log(this.addFbuilder.value)
    this.formValues = this.addFbuilder.value


    this.submitted = true
    if (this.addFbuilder.invalid) {
    
    } 

   
    if(!this.addFbuilder.invalid) {
      this.sendValueIntoService(this.formValues) 
      this.menuService.postForm().subscribe((users) => {
       
       this.users.push(users);
       console.log(this.users);

      const backResponse = users 
      console.log(backResponse)
      
      if (backResponse.status==0 && backResponse.data.errors.facebookLink.message=="not facebook link" && backResponse.data.errors.facebookLink.message!==undefined ) {
        this.facebookError= backResponse.data.errors.facebookLink.message /* [0].data.errors.facebookLink.message */
        console.log(this.facebookError)
      }else if(backResponse.status==0 && backResponse.data.errors.age.message=="age must be above 18"){
          this.ageError= backResponse.data.errors.age.message
          console.log(this.ageError)
         
        }
       else {
      this.router.navigate(["reservation"])
      }
      });
    }
    
  }

  get f() { return this.addFbuilder.controls; }

  
}