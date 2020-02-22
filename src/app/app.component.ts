import { Component } from '@angular/core';

import { lorem } from 'faker';

export declare let require: any;
const movieQuote  = require('popular-movie-quotes');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = movieQuote.getRandomQuote();
  enteredText = '';
  // solved = false;



  onChangeLength(value: string) {
    this.enteredText = value;
    // if (value == this.randomText){
    //   this.solved = true;
    // }
  }

  compare(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter){
      return 'pending'
    }
    if (enteredLetter == randomLetter) {
      return 'correct'
    }
    if (enteredLetter != randomLetter){
      return 'incorrect'
    }

  }

}
