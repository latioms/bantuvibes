import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(){
    this.loadScripts();
  }

  loadScripts(){
     // This array contains all the files/CDNs
     const dynamicScripts = [
      '../../../assets/js/jquery-3.4.1.min.js', 
      '../../../assets/js/owl.carousel.min.js',
      '../../../assets/js/jquery.nice-select.min.js', 
      '../../../assets/js/custom.js','../../../assets/js/bootstrap.js',
      '../../../assets/js/popper.min.js', '../../../assets/js/isotope.pkgd.min.js',
        // 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        // 'https://unpkg.com/isotope-layout@3.0.4/dist/isotope.pkgd.min.js',
        // 'https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js',
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
