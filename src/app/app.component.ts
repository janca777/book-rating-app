import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating App';
    dateTime = setInterval(this.doDate, 1000);

  private doDate() {
    const now = new Date();
    const dateString = now.toDateString() + ' ' + now.toLocaleTimeString('de-DE');

    const htmlObj = document.getElementById("updatedDateTime");
    if (htmlObj !== null) {
      htmlObj.innerHTML = dateString;
    }
  }
}
