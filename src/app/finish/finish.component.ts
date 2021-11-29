import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish',
  template: `<h3>Grievance report received!</h3>
  <hr>
  <p>A staff member will be in touch with you as soon as possible.</p>
  <p>Please contact us on our priority helpline if you are in need of immediate assistance.</p>
  <p>Priority Helpline: 0091-123456789</p>`,
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
