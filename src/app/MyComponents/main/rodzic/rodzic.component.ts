import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rodzic',
  template: `
    <h2 class="parent-component">Parent Component</h2>
    <app-dziecko class="child-component" (messageEvent)="receiveMessage($event)"></app-dziecko>
    <p class="parent-component">Received message from Child: <span class="received">{{ receivedMessage }}</span></p>
  `,
  styles: [`
    .parent-component {
      background-color: yellow;
      padding: 20px;
      margin: 10px;
      color: black;
    }
    .child-component {
      background-color: yellow;
      padding: 10px;
      border-radius: 0px;
    }
    .received{
      font-weight: bold;
    }
  `]
})
export class RodzicComponent {
  receivedMessage: string = 'waiting';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
