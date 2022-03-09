import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VenueModel } from 'src/app/shared/venue.model';

@Injectable({
  providedIn: 'root'
})
export class ViewEventService {
readonly APIUrl="https://localhost:44359/api/Venue/"
  constructor(private http:HttpClient) { }
  getVenue():Observable<VenueModel[]>
  {
    let Url=this.APIUrl+'getAllVenue/'
    return this.http.get<VenueModel[]>(Url);
 
  }
}
