import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  isChecked1: boolean;
  isChecked2: boolean;
  data = {
    Firstbox: "yes",
    Second_box: "yes"
  }

  ngOnInit() {
    this.checkValue(event);

  }

  checkValue(event) {

    if (this.data.Firstbox === "yes" && this.data.Second_box === "yes") {
      this.isChecked1 = true;
      this.isChecked2 = true;
      console.log(this.isChecked1);
      console.log(this.isChecked2);
    } else if (this.data.Firstbox === "yes" && this.data.Second_box === "no") {
      this.isChecked1 = true;
      this.isChecked2 = false; 
      console.log(this.isChecked1);
      console.log(this.isChecked2);
    } else if (this.data.Firstbox === "no" && this.data.Second_box === "yes") {
      this.isChecked1 = false;
      this.isChecked2 = true;
      console.log(this.isChecked1);
      console.log(this.isChecked2);
    } else {
      this.isChecked1 = false;
      this.isChecked2 = false;
      console.log(this.isChecked1);
      console.log(this.isChecked2);
    }

  }

}
