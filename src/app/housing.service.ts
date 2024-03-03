import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly serverUrl = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.serverUrl);

    return data.json() ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.serverUrl}/${id}`);

    return data.json() ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    window.alert(
      `The application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }

  constructor() {}
}
