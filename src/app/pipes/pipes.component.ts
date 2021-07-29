import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  template:
  `
    <h2>Uppercase Pipe</h2>
    {{title | uppercase}}<br/>
    <h2>Lowercase Pipe</h2>
    {{title | lowercase}}
    <h2>Currency Pipe</h2>
    {{6589.23 | currency:"USD"}}<br/>
    {{6589.23 | currency:"USD":true}} //Boolean true is used to get the sign of the currency.
    <h2>Date pipe</h2>
    {{today | date:'d/M/y'}}<br/>
    {{today | date:'shortTime'}}
    <h2>Decimal Pipe</h2>
    {{ 454.78787814 | number: '3.1-4'}} // 3 is for integer part, 1-4 are for min-max decimals to be displayed.<br>
    {{ 45.78 | number: '3.1-4'}} // 3 is for integer part, 1-4 are for min-max decimals to be displayed.
    <h2>Json Pipe</h2>
    {{ person | json }}
    <h2>Percent Pipe</h2>
    {{00.54565 | percent}}
    <h2>Slice Pipe</h2>
    {{months | slice:2:6}}
    // here 2 and 6 refers to the start and the end index
  `
  ,
  styles: [
    `h2{
        text-align:left;
        font-family:Georgia;
        font-size:20px;
        color:blue
      }`
  ]
})
export class PipesComponent implements OnInit {

  title = 'my-first-app';
  today = new Date();
  person = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  constructor() { }
  ngOnInit(): void {
  }

}
