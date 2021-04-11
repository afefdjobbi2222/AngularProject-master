import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { ArbitreService } from '../../service/arbitre.service';
import { Arbitre } from "../../model/arbitre";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-liste-arbitre',
  templateUrl: './liste-arbitre.component.html',
  styleUrls: ['./liste-arbitre.component.css']
})
export class ListeArbitreComponent implements OnInit {

  //arbitres: Observable<Arbitre[]> ;
  arbitres: any;
  imag: any;

  constructor(private arbitreService: ArbitreService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.arbitres = this.arbitreService.getArbitreList();    
  } 
    
  deleteArbitre(id: number) {
      this.arbitreService.deleteArbitre(id).subscribe( data=> {
      console.log(data);
      this.reloadData(); },
      error => console.log(error)); 
  }
  
  arbitreDetails(id: number){ 
    this.router.navigate(['details',id]);
  } 

 

}
