import { Component, OnInit } from '@angular/core';
import { BookeventService } from '../bookevent.service';
import {AuthenticationService} from 'src/app/auth/authentication.service';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-viewbooked-event',
  templateUrl: './viewbooked-event.component.html',
  styles: [
  ]
})
export class ViewbookedEventComponent implements OnInit {
  bookLists:any=[];
  bookList:any[]=[];
  detail:any=[];
  temp!:any;
  email=this.auth.email;
  constructor(private service:BookeventService,private auth:AuthenticationService) { 
    this.getdetails();
    let booking:any[];
    // let email=this.auth.email;
  }

  ngOnInit(): void {
  }
  

  getdetails(){
    this.service.getbooking(this.email).subscribe(data=>{
      this.bookList=data;
      // console.log(this.bookLists);
    })
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // getdetails(){
  //   this.service.getbooking().subscribe(data=>{
  //     data.forEach(function(detail){
  //       if(detail.applicantEmail==email){
  //         booking[0]=detail;
  //       }
  //     })
  //     this.bookList=data;
  //     // console.log(this.bookLists);
  //   })
  //   let email=this.auth.email;
  //     console.log(email);
  //     this.bookLists.forEach(function(detail) {
        
  //       // console.log("1111111111111111");
  //       if(detail.applicantEmail==email){
  //         // this.bookList.push(detail);
  //         // bookList[0]=detail;
          
  //         console.log(detail);
  //       }
  //     });
  // }
  //~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~


  delete(index:number)
  {
    let temp=this.bookList[index].bookingId

    this.service.deleteBooking(temp).subscribe(x=>{
      console.log(x);
    })
    this.service.getbooking(this.email);
  }
  edit(index:number)
  {
    this.service.editBody=this.bookList[index];
  }


}
