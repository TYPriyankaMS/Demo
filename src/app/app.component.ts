import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>
  title = 'Project2';
  fromdate;
  bsValue = new Date();
  constructor(){
    this.datePickerConfig=Object.assign({},{containerClass: 'theme-orange'});
  }
  ngOnInit() {

  }

}
