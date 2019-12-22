import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';

  posts = [
    {
      title: 'Mon premier article',
      content: 'Du contenu',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième article',
      content: 'Du contenu',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
