import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Swiper from 'swiper';

@Component({
  selector: 'app-testimonials',
  standalone: true,
   imports: [],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    // prevent swiper from running during SSR
    if (!isPlatformBrowser(this.platformId)) return;

    // load Swiper only in the browser
    // const Swiper = (await import('swiper')).default;
    // const { Navigation, Pagination } = await import('swiper/modules');

    // load CSS dynamically
  

  //   new Swiper('.swiper', {
  //     modules: [Navigation, Pagination],
  //     navigation: true,
  //     pagination: { clickable: true }
  //   });
  // }
}
}
