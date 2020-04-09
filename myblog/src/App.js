import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/Homepage'
import PostsListPage from './pages/PostsListPage'
import PostPage from './pages/PostPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={PostsListPage}/>
        <Route exact path="/posts/:title" component={PostPage}/>
      </Switch>
    </Router>
  );
}

export default App;
