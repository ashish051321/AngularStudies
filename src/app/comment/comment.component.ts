import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input('quote') myquote:string;

  constructor() { }

  ngOnInit() {
    console.log("I got this as input "+ this.myquote);
  }

  printMyName()
  {
    console.log("My name is comment");
  }
}
