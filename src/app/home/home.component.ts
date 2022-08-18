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
    this.loadScripts();
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

  loadScripts(){
     // This array contains all the files/CDNs
     const dynamicScripts = [
        'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        '../../../assets/js/jquery-3.4.1.min.js', 
        'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
        'https://unpkg.com/isotope-layout@3.0.4/dist/isotope.pkgd.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js',
      '../../../assets/js/custom.js','../../../assets/js/bootstrap.js',
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap'
      ];
      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        document.getElementsByTagName('head')[0].appendChild(node);
      }
  }
  ngOnInit(): void {
  }


  

}
