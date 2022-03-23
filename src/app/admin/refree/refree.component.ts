import { Component, OnInit } from '@angular/core';
import { RefereeModel } from './referee.model';
import { RefreeService } from './refree.service';

@Component({
  selector: 'app-refree',
  templateUrl: './refree.component.html',
  styles: [
  ]
})
export class RefreeComponent implements OnInit {
refrees!:RefereeModel[];
searchString:string='';
  constructor(private service:RefreeService) { }

  ngOnInit(): void {
    
  this.getReferee();
  }
  getReferee(){
    this.service.getRefree().subscribe(data=>{
      this.refrees=data;
      
    })
  }
  ToUpdate(index:number)
  {
    this.service.editrefree=this.refrees[index];

  }
  delete(index:number)
  {
    this.service.deleteref=this.refrees[index];

  }

}
