import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit, AfterViewInit{

  bannerImages: Array<string> = [
    "assets/images/banner-1.webp",
    "assets/images/banner-2.webp",
    "assets/images/banner-3.webp",
  ]

  mySwiper: Swiper

  constructor() { }

  ngAfterViewInit() {
    this.mySwiper = new Swiper(".swiper-container")
  }
  ngOnInit(): void {
  }

}
