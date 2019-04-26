import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Deal } from '../deal';
// import { AuthService } from '../auth.service';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-public-deals',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: 'private-deals.component.html',
  styleUrls: ['private-deals.component.scss']
})
export class PrivateDealsComponent implements OnInit, OnDestroy {
  dealsSub: Subscription;
  publicDeals: Deal[];
  error: any;

  constructor(
    public dealService: DealService,
    // public authService: AuthService
  ) { }

  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit() {
    this.dealsSub = this.dealService
      .getPrivateDeals()
      .subscribe(
        deals => this.publicDeals = deals,
        err => this.error = err
      );
  }

  ngOnDestroy() {
    this.dealsSub.unsubscribe();
  }
}