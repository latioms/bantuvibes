import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  [x: string]: any;

  

  form :FormGroup;
  nbPlaces = ['1', '2', '3', '4', '5']

  
   
  constructor(private fb: FormBuilder,
              private http : HttpClient,
              private router: Router
    ){
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

  errormsg:any
  

  submit(){
    // console.log(this.form.getRawValue());
    const formData = this.form.getRawValue();

    if (this.form.valid){
      console.log(formData)
      this.http.post('http://localhost:3000/api/addReservation', formData).subscribe({

        next:(result:any) => {
          console.log("Requete effectue avec succes");
          console.log(result);

          // this.router.navigateByUrl('/menu');
        },
  
        error:error => {
          console.error("error");
          console.log(error);
        }
  
      }) ;
    }else{
      console.log("All fields are required")
    }
  }
  loadScripts(){
     // This array contains all the files/CDNs
     const dynamicScripts = [''
      // '../../../assets/js/jquery-3.4.1.min.js', 
      // '../../../assets/js/owl.carousel.min.js',
      // '../../../assets/js/jquery.nice-select.min.js', 
      // '../../../assets/js/custom.js','../../../assets/js/bootstrap.js',
      // '../../../assets/js/popper.min.js', '../../../assets/js/isotope.pkgd.min.js',
      //   'https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap'
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
