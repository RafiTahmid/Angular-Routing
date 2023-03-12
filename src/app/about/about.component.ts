import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  text = 'Test Message for Pipes';

  today = Date()
  student = {
    id: '789',
    name: 'backbencher',
    class: 'IX'
  }
}
