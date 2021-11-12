import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  @Input() label: string | undefined;
  @Output() callbackEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  callback(){
    this.callbackEvent.emit(true);
  }

}
