import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<any[]>();

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

  constructor() { }

  emitPostSubject() {
    this.postSubject.next(this.posts);
  }

  love(index: number) {
    this.posts[index].loveIts++;
    this.emitPostSubject();
  }

  dontLove(index: number) {
    this.posts[index].loveIts--;
    this.emitPostSubject();
  }

  add(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();
  }

  delete(index: number) {
    this.posts.splice(index, 1);
    this.emitPostSubject();
  }
}
