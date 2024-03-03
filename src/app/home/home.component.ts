import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeHolder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        <app-housing-location
          *ngFor="let item of housingLoactionList"
          [housingLoaction]="item"
        ></app-housing-location>
      </section>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLoactionList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLoactionList = this.housingService.getAllHousingLocations();
  }
}
