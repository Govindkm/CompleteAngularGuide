import { Component } from '@angular/core';
import { account } from './interfaces/accounts.interface';
import { AccountsDataService } from './services/accounts-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsDataService]
})
export class AppComponent {
  constructor(private accountService: AccountsDataService){}
  onAccountAdded(newAccount: account) {
    this.accountService.account=newAccount;
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountService.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
