import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../../models/question';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  private title: string;
  private description: string;
  private typicalAnswer: string;
  private difficulty: number;

  private saveStatus: string;

  @Input()
  private enableSave: boolean = true;

  private hasFollowupQuestion: boolean = false;
  
  constructor(private af: AngularFire) { }

  ngOnInit() {
  }

  saveQuestion(){
    this.saveStatus = null;
    let question: Question = this.getQuestion();
    
    const questions = this.af.database.list('/questions');
    questions.push(question).then(success => {
      this.saveStatus = "Question saved successfully";
    }, error => {
      this.saveStatus = "Error occurred while saving question";
    });

    this.title = this.description = this.typicalAnswer = this.difficulty = null;
  }

  getQuestion(){
    return {
      title: this.title,
      description: this.description,
      typicalAnswer: this.typicalAnswer,
      difficulty: this.difficulty
    }
  }  
}
