import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string} = {id:undefined, name:undefined};

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.user.id = this.route.snapshot.params['id'];
    this.user.name = 'Raandom Name';    
    

    //Use this observable only if the router parameters changes within the same component and the data needs to be updated
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.params.subscribe((params)=>{
      this.router.navigate(['/users', params['id']]);
    })
  }
  
  changeUser(){
    let number = Math.floor(1+(Math.random()*3));
    this.router.navigate(['/users', number])
  }

}
