import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: ` <section class="listing">
    <img
      class="listing-photo"
      [src]="housingLoaction.photo"
      alt="Photo of {{ housingLoaction.name }}"
    />
    <h2 class="listing-heading">{{ housingLoaction.name }}</h2>
    <p class="listing-location">
      {{ housingLoaction.city }}, {{ housingLoaction.state }}
    </p>
  </section>`,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLoaction!: HousingLocation;
}
