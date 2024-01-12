import { Component } from '@angular/core';
import {adminsDataStore} from "../../../../shared/store/admin-data-store";

@Component({
  selector: 'app-users-admins',
  templateUrl: './users-admins.component.html',
  styleUrls: ['./users-admins.component.scss']
})
export class UsersAdminsComponent {
  admins: any[] = adminsDataStore;
}
