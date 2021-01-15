import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itsa-website';
  public constructor(private titleService: Title ) {

    this.titleService.setTitle("ITSA");
  }
}