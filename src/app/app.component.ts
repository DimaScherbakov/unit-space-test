import { Component } from '@angular/core';
import { MultiResponse } from 'giphy-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public searchResult: MultiResponse | undefined;

  public setResult(event: MultiResponse):void {
    this.searchResult = event;
  }
}
