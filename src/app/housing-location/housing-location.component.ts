import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
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
    <a [routerLink]="['/details', housingLoaction.id]"
      >Learn more about this location</a
    >
  </section>`,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLoaction!: HousingLocation;
}
