import React from 'react';
import './ForumPage.css';

export default function Post(props) {

  return(
    <div class="post_outer">
      <span id="post_author">{props.author}: </span><span id="post_content">{props.content}</span> <span id="post_date">{props.ts}</span>
    </div>
  );
}
