import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questions: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.questions = af.database.list('/questions');
  }

  ngOnInit() {
  }

}
