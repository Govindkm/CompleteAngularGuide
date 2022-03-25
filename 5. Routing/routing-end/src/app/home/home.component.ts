import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private authService:AuthServiceService) { }

  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/servers', 1, 'edit'], {queryParams: { allowEdit: false}, fragment: "loading"});
  }

}
