import { Component, OnInit } from '@angular/core';
import { ArbitreService } from '../../service/arbitre.service';
import { Router } from '@angular/router';

import { Arbitre } from "../../model/arbitre";


@Component({
  selector: 'app-addarbitre',
  templateUrl: './addarbitre.component.html',
  styleUrls: ['./addarbitre.component.css']
})
export class AddarbitreComponent implements OnInit {
  
  arbitre: any;
  submitted = false;

  constructor(private arbitreService: ArbitreService, private router: Router) { }

  ngOnInit() {
  }

  newArbitre(): void {
    this.submitted = false;
    this.arbitre = new Arbitre();
  }

  save() {
    this.arbitreService.createArbitre(this.arbitre).subscribe(data => {
      console.log(data)
      this.arbitre = new Arbitre();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/arbitres']);
  }

}
