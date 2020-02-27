import { Component, OnInit } from '@angular/core';
import { Sales } from '../entity/sales';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user-service.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  sale: Sales = new Sales();
  

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  /*sales() {

    this.authService.sales(this.sales).then(data => {
      if (data != undefined) {
        this.userService.sales = data;
        this.router.navigate(['/sales']);
      }

    });
  }*/

}
