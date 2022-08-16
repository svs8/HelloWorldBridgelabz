import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldBridgelabz';
  imgUrl="../assets/bridgelabz.png";


ngOnInit(): void {
  this.title="Hello from Bridhelabz";
}
}
