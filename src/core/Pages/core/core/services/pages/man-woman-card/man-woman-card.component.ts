import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-man-woman-card',
  templateUrl: './man-woman-card.component.html',
  styleUrls: ['./man-woman-card.component.scss'],
  animations: [
    trigger('enabledStateChange', [
      state(
        'default',
        style({
			opacity: 1,
		})
	),
	state(
		'disabled',
		style({
			opacity: 0.5,
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ])
  ]
})
export class ManWomanCardComponent {
  stateOfElementOne=false;
  stateOfElementTwo=false;
  stateOfElementThree=false;



  onClickDefault(){
    this.stateOfElementOne=!this.stateOfElementOne;
  }
  
  onClickDefault2(){
    this.stateOfElementTwo=!this.stateOfElementTwo;
  }
  
  onClickDefault3(){
    this.stateOfElementThree=!this.stateOfElementThree;
  }
}



