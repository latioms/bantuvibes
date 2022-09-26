import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BantuVibes';

  constructor(){
    this.loadScripts()
  }

  loadScripts(){
    // This array contains all the files/CDNs
    const dynamicScripts = [
     '../../assets/js/jquery-3.4.1.min.js', 
     '../../assets/js/owl.carousel.min.js',
     '../../assets/js/jquery.nice-select.min.js', 
     '../../assets/js/custom.js','../../assets/js/bootstrap.js',
     '../../assets/js/popper.min.js', '../../assets/js/isotope.pkgd.min.js',
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
}
