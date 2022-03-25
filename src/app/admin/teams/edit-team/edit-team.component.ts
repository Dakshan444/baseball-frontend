import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification-service.service';
import { TeamModel } from '../team.model';
import { TeamsService } from '../teams.service';
import {ToastrService} from 'node_modules/ngx-toastr'
import { PlayerModel } from '../player.model';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
editValue!: TeamModel;
PlayerList!:PlayerModel[];
TeamForm!:FormGroup;
  constructor(private service:TeamsService, private route:Router, private notify:NotificationService,private toastr:ToastrService) {
    
   }

  ngOnInit(): void {
    this.editValue=this.service.edit;
    this.TeamForm= new FormGroup(
      {
        _TeamId: new FormControl(this.editValue.teamId,Validators.required),
        _TeamName:new FormControl(this.editValue.teamName,Validators.required),
        _TeamImageUrl: new FormControl(this.editValue.imageUrl,Validators.required),
        _TeamDescription: new FormControl(this.editValue.teamDescription,Validators.required),
        _TeamLocation:new FormControl(this.editValue.location,Validators.required),
        _TeamPlayers: new FormControl(this.editValue.noOfPlayers,Validators.required)
      }
    );
    // console.log(this.editValue);
    this.getdetails();
  }
  updateTeams()
  {
    const body:TeamModel={
      teamId:this.TeamForm?.get('_TeamId')?.value,
      teamName:this.TeamForm?.get('_TeamName')?.value,
      teamDescription:this.TeamForm?.get('_TeamDescription')?.value,
      imageUrl:this.TeamForm?.get('_TeamImageUrl')?.value,
      noOfPlayers:this.TeamForm?.get('_TeamPlayers')?.value,
      location:this.TeamForm?.get('_TeamLocation')?.value
    }
    let params=this.editValue.teamId;
    // console.log(params); 
    this.service.editTeam(params,body).subscribe(x=>{
      // console.log(body);
      setTimeout(()=>{
        this.route.navigate(['admin/teams']);
      })
    })
    
    
    this.toastr.success("Team Details edited successfuly","Edit Team Details");
  }
  
  // getdetails(){
  //   let params=this.editValue.teamId;
  //   this.service.getPlayers(params).subscribe(data=>{
  //     this.PlayerList=data;
  //   // console.log(data);
  //   })
  // }

  getdetails(){
    let params=this.editValue.teamId;
    this.service.getPlayers(params).subscribe(data=>{
      this.PlayerList=data;
    // console.log(data);
      // console.log(this.PlayerList)
    })
  }

}
