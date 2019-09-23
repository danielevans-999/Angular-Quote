import { Quote } from "../quote";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quote-main",
  templateUrl: "./quote-main.component.html",
  styleUrls: ["./quote-main.component.css"]
})
export class QuoteMainComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      "daniel",
      "Isaac newton",
      "I can calculate the motion of heavenly bodies, but not the madness of people.",
      0,
      0,
      new Date(2018, 5, 1)
    ),
    new Quote(
      "titus",
      "Albert Einstein",
      "Imagination is more important than knowledge.",
      0,
      0,
      new Date(2018, 5, 1)
    ),
    new Quote(
      "steve",
      "Ellen White",
      "The words of the Bible, and the Bible alone, should be heard from the pulpit.",
      0,
      0,
      new Date(2018, 5, 1)
    )
  ];
  seeDetails(index) {
    this.quotes[index].viewDetails = !this.quotes[index].viewDetails;
  }
  purgeQuote(isDone, index) {
    if (isDone) {
      let toDelete = confirm(`Are you sure you want to delete this Qoute`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(dan) {
    dan.elapse = new Date(dan.elapse)
    this.quotes.push(dan);
   
  }
  addVote(dan, index) {
    if (dan) {
      this.quotes[index].upvote+=1;
    }
  }
lessVote(dan,index){
  if(dan){
    this.quotes[index].downvote+=1
  }
}

initNum:number
finNum:number
counter:number

mostLiked(){
  this.initNum=0
  this.finNum=0
  for (this.counter=0; this.counter < this.quotes.length;this.counter++){
    this.finNum =this.quotes[this.counter].upvote;

    if(this.finNum > this.initNum){
      this.initNum = this.finNum
    }
 
   
    
  }
  // console.log(this.quotes.length);
  return this.initNum;
}
  constructor() { 

  }

  ngOnInit() {

  }
}
