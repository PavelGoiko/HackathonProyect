import { Component, OnInit } from '@angular/core';
import { Sales } from '../entity/sales';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user-service.service';
import { SalesService } from '../providers/sales.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {



  sale: Sales = new Sales();
  list: Sales[] = [];
 

  constructor(private authService: AuthService,
    private userService: UserService,
    private salesService: SalesService,
    private router: Router) { }

  ngOnInit() {
    this.showAll();
  }
  showAll() {
    this.salesService.searchAll().then((datos) => {
      this.list = datos as Sales[];
    });

  }

  delete(sale) {
    this.salesService.delete(sale).then((datos) => {
      this.showAll();
    });
  
  }

  edit(sales: Sales) {
    this.router.navigate(["/edit", sales.id])
  }


}

//moco






  /*sales() {

    this.authService.sales(this.sales).then(data => {
      if (data != undefined) {
        this.userService.sales = data;
        this.router.navigate(['/sales']);
      }

    });
  }*/


