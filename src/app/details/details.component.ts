import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  housingLocation?: HousingLocation;
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const id = Number(this.route.snapshot.params['id']);

    this.housingService
      .getHousingLocationById(id)
      .then((housingLocation?: HousingLocation) => {
        this.housingLocation = housingLocation;
      });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );

    this.applyForm.reset();
  }
}
