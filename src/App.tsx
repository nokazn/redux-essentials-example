import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { PostList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <>
            <AddPostForm />
            <PostList />
          </>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
