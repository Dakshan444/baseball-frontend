import { Component, OnInit } from '@angular/core';
import { PlayerModel } from '../player.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  PlayerList!:PlayerModel[];
  ActivatedEditButton:boolean=false;
  depe!:PlayerModel;
  
    constructor(private service: TeamsService) { }
  
    ngOnInit(): void {
      this.getdetails();
    }
  edit(item:any){
    // this.dep=item;
    this.ActivatedEditButton=true;
    console.log(item);
  }
  close()
  {
    this.ActivatedEditButton=false;
  }
    getdetails(){
      this.service.getPlayer().subscribe(data=>{
        this.PlayerList=data;
        
      // console.log(data);
      })
    }
    // delete(item: number)
    // {
    //   this.depe=this.PlayerList[item];
    //   console.log(this.PlayerList[item]);
    //   this.service.deletePlayer(this.depe.firstName).subscribe();
    //   this.PlayerList.splice(item,1);
    //   this.service.deleteuser=this.depe;
    // }
}
