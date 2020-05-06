import {Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
  }
)
export class PostCreateComponent {

  newPost = 'NEW CONTENT';
  enteredValue = '';

  /* onAddpost(postInput: HTMLTextAreaElement) {
    // this.newPost = 'The user\'s post';
      this.newPost = postInput.value;
  } */

  onAddpost() {
      this.newPost = this.enteredValue;
  }
}
