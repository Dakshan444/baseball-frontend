import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueModel } from 'src/app/shared/venue.model';
import { VenueserviceService } from '../venueservice.service';

@Component({
  selector: 'app-delete-venue',
  templateUrl: './delete-venue.component.html',
  styles: [
  ]
})
export class DeleteVenueComponent implements OnInit {

 EditForm!:FormGroup

Venue!:VenueModel;
  constructor(private service:VenueserviceService,private route: Router,private  router:ActivatedRoute ) { }

  ngOnInit(): void {
    // this.service.test();
    // this.back();
  }
  
// deleteVenue()
//   {
    
//     let params=this.service.test1().venueId;
//     this.service.deleteVenue(params).subscribe(x=>{

//       console.log(x);
//       setTimeout(() => {
//         this.route.navigate(["admin/venues/view"]);
//     }, 1000);
//     });
//   }
//    back(){
//     console.log(this.service.test1().venueId)
//   }

}
