import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../../services/gitsearch.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  constructor(private gitsearchService: GitsearchService) {
    this.gitsearchService.getProfileDesc().subscribe(profile =>{
      console.log(profile);
    });
   }

  ngOnInit() {
  }

}
