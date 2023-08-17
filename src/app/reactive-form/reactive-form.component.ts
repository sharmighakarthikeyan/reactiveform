
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  
  countrys:country[]=[
 
 new country('1', 'India'),
 new country('2', 'usa')
]



contactform=new FormGroup(
  {
    firstName:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    //form control namba javascript object pass panna mudiyum
    lastName:new FormControl({
      value:"s k",
      disabled:false
    }),
    email:new FormControl('sharmi@gmail.com'),
    gender:new FormControl('male'),
    isMarried:new FormControl({
      disabled:false
    }),
    country:new FormControl('1'),
    address:new FormGroup(
      {
        city:new FormControl("tiruchengode"),
        street:new FormControl("sengodapalayam"),
        pincode:new FormControl("637209")


      }
    )
  }
)
get first()
{
return this.contactform.get('firstName');
}

Detailssubmit(form:any)
{
  console.log(form.value)
}








}
class country
{
  id!:string;
  name!:string
  constructor( id: string,name: string)
  {
    this.id=id;
    this.name=name;
  }
}
