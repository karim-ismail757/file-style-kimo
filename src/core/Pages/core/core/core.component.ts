import { Component } from '@angular/core';
import { NavbarComponent } from 'src/core/Authentication/pages/auth/navbar/navbar.component';
declare var jQuery:any;

interface JQuery {
  chosen(options?:any):JQuery;
}    

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {





  globalPhone(){

    jQuery("#input").intlTelInput({
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});

  }
}
