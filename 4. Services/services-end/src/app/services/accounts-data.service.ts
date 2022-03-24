import { Injectable } from '@angular/core';
import { account } from '../interfaces/accounts.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsDataService {
  private _accounts: account[] = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor() { } 

  public get accounts() : account[] {
    return this._accounts;
  }

  public set accounts(v : account[]) {
    this._accounts = this._accounts.concat(v);
  }
  
  public set account(v : account) {
    this._accounts.push(v);
  }
  
}
