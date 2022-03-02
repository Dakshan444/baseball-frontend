import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user.model';
import { ServicedService } from '../serviced.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
deleteelemeent!:UserModel;
  constructor(private serve:ServicedService) { 
this.deleteelemeent=this.serve.deleteuser;
  }

  ngOnInit(): void {
  }
  deleteUser()
  {
    this.serve.deleteUser(this.deleteelemeent.username).subscribe()

  }

}
