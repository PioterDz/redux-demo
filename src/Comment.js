import React from 'react';


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
    <div>
        <li>
            {text} <span>votes: {votes}</span> <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        </li>
        <li>
            {text} <span>votes: {votes}</span> <button onClick={() => thumbDownComment(id)}>Thumb Down</button>
        </li>
    </div>

export default Comment;