import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentContainer from './CommentContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;
