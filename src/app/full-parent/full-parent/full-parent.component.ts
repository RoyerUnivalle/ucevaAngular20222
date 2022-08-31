import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-full-parent',
  templateUrl: './full-parent.component.html',
  styleUrls: ['./full-parent.component.scss']
})
export class FullParentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
