import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from './team.model';
import {PlayerModel} from './player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
// teams!:TeamModel[];
readonly APIUrl = "https://localhost:44359/api/Team/"
readonly playerAPIUrl="https://localhost:44359/api/player/"
  constructor(private http:HttpClient) { }
  getTeams():Observable<TeamModel[]>
  {
    
return this.http.get<TeamModel[]>("https://localhost:44359/api/Team/getTeam")
  }
  edit!:TeamModel;
  editTeam(params:number,body:TeamModel):Observable<TeamModel>
  {
    let URL=this.APIUrl+"editTeam/";
   return  this.http.put<TeamModel>(URL+params,body)
  }
  test(){
    return console.log(this.edit);
  }
  addTeam(body:TeamModel):Observable<TeamModel>{
    let Url=this.APIUrl+'addTeam/';
    return this.http.post<TeamModel>(Url,body);

  }
  delete!:TeamModel;
  deleteTeam(params:number):Observable<TeamModel>{
    let Url=this.APIUrl+"deleteTeam/";
    return this.http.delete<TeamModel>(Url+params);
  }

  //players services
  addPlayer(body:PlayerModel):Observable<PlayerModel>{
    let Url=this.playerAPIUrl+'addPlayer/';
    return this.http.post<PlayerModel>(Url,body);
  }

  getPlayer():Observable<PlayerModel[]>
  {
    return this.http.get<PlayerModel[]>("https://localhost:44359/api/player/getPlayer")
  }

  getPlayers(params:number):Observable<PlayerModel[]>{
    let Url=this.playerAPIUrl+'getPlayers/';
    return this.http.get<PlayerModel[]>(Url+params);
  }
}
