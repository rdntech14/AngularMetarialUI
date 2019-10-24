import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMetarialUI';
  titleDes ='Select Genre';

  onClickComedy(){
    this.titleDes = 'Comedy Movie List';
    console.log('aaaa');
  }
  onClickDrama(){
    this.titleDes = 'Drama Movie List';
    console.log('aaaa');
  }
  onClickAction(){
    this.titleDes = 'Action Movie List';
    console.log('aaaa');
  }
}
