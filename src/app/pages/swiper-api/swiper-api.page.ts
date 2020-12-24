import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-swiper-api",
  templateUrl: "./swiper-api.page.html",
  styleUrls: ["./swiper-api.page.scss"]
})
export class SwiperApiPage implements OnInit {
  sliderOne: any;

  // Slider With Arrow
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1
  };

  // Slider With Arrow & Progress Pagination
  sliderOptsTwo = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 220,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    }
  };

  // Slider With Loop Mode / Infinite Loop
  slideOptsThree = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  // Ionic Thumb Gallary
  slideOptsFour = {
    initialSlide: 0,
    slidesPerView: 4,
    spaceBetween: 0
  };

  @ViewChild("slider", { read: ElementRef, static: true }) slider: ElementRef;

  constructor() {
    this.sliderOne = {
      slidesItems: [
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/1485630/pexels-photo-1485630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 2,
          image:
            "https://images.pexels.com/photos/2635390/pexels-photo-2635390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 3,
          image:
            "https://images.pexels.com/photos/1583571/pexels-photo-1583571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 4,
          image:
            "https://images.pexels.com/photos/1707402/pexels-photo-1707402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    };
  }

  ngOnInit() {}

  slideNext(slideView) {
    slideView.slideNext(500);
  }

  slidePrev(slideView) {
    slideView.slidePrev(500);
  }

  // Ionic Thumb Gallary
  slideTo(index) {
    this.slider.nativeElement.slideTo(index);
  }
}
