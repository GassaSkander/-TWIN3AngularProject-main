import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public userlist: User[];
  constructor() { }

  ngOnInit(): void {
    this.userlist=[
      {idu:1,
        picture:'https://bootdey.com/img/Content/avatar/avatar1.png',
name:'James Barber',
job:'FullStack dev',
phone: '55 55 55 ',
email:"james@gmail.com",
adress:"rue d'algerie; tunisie"
      },
      {idu:1,
        picture:'https://bootdey.com/img/Content/avatar/avatar1.png',
name:'Phyllis Gatlin',
job:'Full Stack Developer',
phone: '070 2860 5375 ',
email:'PhyllisGatlin@spy.com',
adress:' 52 Ilchester MYBSTER 9WX'
      },
      {idu:1,
        picture:'https://bootdey.com/img/Content/avatar/avatar1.png',
name:'ons.ba',
job:'Full Stack Developer',
phone: '070 2860 5375 ',
email:'PhyllisGatlin@spy.com',
adress:' 52 Ilchester MYBSTER 9WX'
      }


    ]
  }
  DeleteUSer(user:User):void{

    let i =this.userlist.indexOf(user);
    if(i!=-1){
      this.userlist.splice(i,1);
    }





  }

}
