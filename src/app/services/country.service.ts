import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
 
@Injectable({
  providedIn: "root",
})
export class CountryService {
  getCountries() {
    const countries: any[] = [
      { name: "Argentina", phone_prefix: "+54" },
      { name: "United States", phone_prefix: "+1" },
      { name: "United Kingdom", phone_prefix: "+44" },
      { name: "Australia", phone_prefix: "+61" },
      { name: "Germany", phone_prefix: "+49" },
    ];
    return of({ success: true,countries:countries }).pipe(delay(500));
  }
}
