import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dziecko',
  template: `
    <h2 class="child-component">Child Component</h2>
    <mat-form-field>
      <input matInput placeholder="Message to Parent" [(ngModel)]="message" />
    </mat-form-field>
    <div class="button-container">
      <button mat-raised-button color="primary" (click)="sendMessage()">Send message to Parent</button>
    </div>
  `,
  styles: [`
    .child-component {
      background-color: green;
      margin-left: 80px;
      margin-right: 80px;
      border-radius: 4px;
      color: white;
    }
    .button-container {
      margin-top: 10px;
      text-align: center;
      padding-bottom: 20px;
    }
  `]
})
export class DzieckoComponent {
  @Output() messageEvent = new EventEmitter<string>();
  message: string = '';

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
