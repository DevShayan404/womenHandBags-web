import { Component, NgZone } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  collection = [
    {
      src: '../../../assets/img/collection-hamdbag.jpg',
      collectionName: 'TOTE BAGS ',
    },
    {
      src: '../../../assets/img/collection-totebag.jpg',
      collectionName: 'HAND BAGS ',
    },
    {
      src: '../../../assets/img/collection-clutche.jpg',
      collectionName: 'CLUTCHES   ',
    },
    {
      src: '../../../assets/img/collection-wallet.jpg',
      collectionName: 'WALLETS  ',
    },
  ];
  cardList = [
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/1.jpg',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/2.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/3.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/4.jpg',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/1.jpg',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/2.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/3.webp',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/4.jpg',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/1.jpg',
    },
    {
      id: 1,
      name: 'Printed Button Down Shirt',
      price: '2500.00',
      currency: 'Rs',
      badge: 'New',
      src: 'assets/img/2.webp',
    },
  ];
  productTabs = [
    {
      productTabName: 'New Arrivals',
    },
    {
      productTabName: 'Most Selling',
    },
    {
      productTabName: 'Discount',
    },
  ];
  activeTabIndex: number = 0;
  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.updateCountdown();
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.zone.run(() => {
          this.updateCountdown();
        });
      }, 1000);
    });
  }

  updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Example: 1 day from now
    const timeDiff = targetDate.getTime() - now.getTime();
    
    if (timeDiff > 0) {
      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    } else {
      // Countdown reached zero or negative (optional handling)
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

}
