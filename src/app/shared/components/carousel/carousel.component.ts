import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CurrentObjectDate } from 'src/app/models/user';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  //carousel configs
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      "<div class='nav-btn prev-slide'>next</div>",
      "<div class='nav-btn next-slide'>prev</div>",
    ],

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 4,
      },
      740: {
        items: 8,
      },
      940: {
        items: 10,
      },
    },
    nav: true,
  };

  @Output() itemClicked = new EventEmitter<string>();
  @Input() data!: CurrentObjectDate;
  activeNumber!: number;

  onSlideClick(data: string, index: number): void {
    console.log('hello !');
    this.activeNumber = index;
    this.itemClicked.emit(data);
  }
}
