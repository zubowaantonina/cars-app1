import {Component, HostListener} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) {
  };

  carsData = [
    {
      image: "1.png",
      name: "Lamborghini Huracan Spyder",
      gear:"полный",
      engine: 5.2,
      plases:2
    },
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      gear:"полный",
      engine: 6.2,
      plases:2
    },
    {
      image: "3.png",
      name: "Ferrari California",
      gear:"полный",
      engine: 3.9,
      plases:4
    },
    {
      image: "4.png",
      name: "Lamborghini Urus",
      gear:"полный",
      engine: 4.0,
      plases:5
    },
    {
      image: "5.png",
      name: "Audi R8",
      gear:"полный",
      engine: 5.2,
      plases:2
    },
    {
      image: "6.png",
      name: "Аренда Chevrolet Camaro",
      gear:"полный",
      engine: 2.0,
      plases:4
    }
  ];

  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (car) {
      this.priceForm.patchValue({car: car.name});
    }
  }
  trans: any;
@HostListener('document:mousemove', ['$event'])
onMouseMove(e: MouseEvent) {
  this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
}

bgPos: any;
@HostListener('document:scroll', ['$event'])
onScroll() {
  this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
}
  onSubmit() {
    if (this.priceForm.valid) {
      alert('Спасибо за заявку!Мы свяжемся с вами в ближайшее время');
      this.priceForm.reset();
    }
  }
}
