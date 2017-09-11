import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['#421cec', '#20d82d', '#0f0202', '#b72ab8', '#2fccd0', '#d80000', '#dd8518', '#11cc00']
  randomColors = function(array) {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random()*m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}
