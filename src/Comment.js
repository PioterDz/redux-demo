import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
    <div>
        <li>
            {text} <span>votes: {votes}</span> 
            <button onClick={() => thumbUpComment(id)}>Thumb up</button> 
            <button onClick={() => thumbDownComment(id)}>Thumb Down</button> 
            <button onClick={() => removeComment(id)}>Remove</button> 
        </li>
    </div>

export default Comment;