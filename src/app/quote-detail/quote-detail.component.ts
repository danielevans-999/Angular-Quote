import { Quote } from "../quote";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-quote-detail",
  templateUrl: "./quote-detail.component.html",
  styleUrls: ["./quote-detail.component.css"]
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDone = new EventEmitter<boolean>();
  quoteDan(purge: boolean) {
    this.isDone.emit(purge);
  }
  constructor() {}

  ngOnInit() {}
}
