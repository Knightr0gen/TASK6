import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Validators} from  '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      title = 'task6';
      constructor(private fb: FormBuilder){}
      user = this.fb.group ({
        firstname: ['',Validators.required],
        lastname:  [''],
        age:  [''],
        sex:  [''],
        email:  [''],
        address:this.fb.group({
          address1: ['',Validators.required],
          address2: [''],
          pin: [''],
        }),
        mobile:this.fb.array([
            this.fb.control(''),
        ]),
      });

      onSubmit(){
        console.log(this.user.value);
        alert(this.user.value);
      }

      get mobiles(){
            return this.user.get('mobile') as FormArray;
      }
    addbtn(){
      this.mobiles.push(this.fb.control(''));
    }
    remove(i: number) {
      this.mobiles.removeAt(i);
    }

}
