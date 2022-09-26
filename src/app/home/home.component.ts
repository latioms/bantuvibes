import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  nbPlaces = [1,2,3,4,5]

  constructor(private fb: FormBuilder){
  // ============================== Formulaire ====================================

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      number_of_chairs: ['', Validators.required],
      date_reserv: ['', Validators.required]
    });
  }

  submit(){
    console.log(this.form.getRawValue());
  }

  ngOnInit(): void {
  }



}
