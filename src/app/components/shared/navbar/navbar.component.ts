import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HuService } from '../../../services/hu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items = this.cartHU.getItems();
  constructor(public cartHU: HuService, private router: Router) { }

  ngOnInit(): void {
  }

  irCarrito(){
    this.router.navigate(['/panel']);
  }

}
