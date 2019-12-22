import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLove() {
    this.postService.love(this.index);
  }

  onDontLove() {
    this.postService.dontLove(this.index);
  }

  onDeletePost() {
    this.postService.delete(this.index);
  }

}
