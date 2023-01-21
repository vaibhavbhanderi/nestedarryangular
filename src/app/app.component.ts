import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupDirective, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform';

  // form: FormGroup = new FormGroup({
  //   name: new FormControl('sss', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')])
  //
  // })
  //
  // get name() {
  //   return this.form.get("name")
  // }
  //
  // submit(form:FormGroupDirective){
  //   if(form.valid){
  //     console.log(JSON.stringify(form.value))
  //   }
  //
  //
  // }


  User:FormGroup=new FormGroup({
    id:new FormControl(''),
    Name:new FormControl(''),
    Email:new FormControl(''),
    age:new FormControl(''),
    categorys:new FormArray([
      new FormGroup({
        cid:new FormControl(''),
        cname:new FormControl('')
      })
    ])

  })



}
