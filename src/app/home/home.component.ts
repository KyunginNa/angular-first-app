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
        <input type="text" placeHolder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterByCity(filter.value)"
        >
          Search
        </button>
      </form>
      <section class="results">
        <app-housing-location
          *ngFor="let item of filteredLocationList"
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
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLoactionList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLoactionList;
  }

  filterByCity(input: string) {
    if (!input) {
      this.filteredLocationList = this.housingLoactionList;
      return;
    }

    this.filteredLocationList = this.housingLoactionList.filter(({ city }) =>
      city.toLowerCase().includes(input.toLowerCase())
    );
  }
}
