import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  changeRoute(routeValue: string) {
    this.closeAny(); 
    console.log(this.route)
    this.router.navigate([{ outlets: { payActive : routeValue }}],{ relativeTo: this.route.parent }); 
 }

  closeAny() {
    this.router.navigate([{ outlets: { payActive : null }}]);
  }

}
