import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=true;

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let snapshot = this.route.snapshot;
    console.log(snapshot.queryParams);
    console.log(snapshot.fragment);
    this.allowEdit = snapshot.queryParams['allowEdit'];
    this.server = this.serversService.getServer(+snapshot.params['id'] || 1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    
    //This will allow the router to forcefully reload the component when the route params changes for this route
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
