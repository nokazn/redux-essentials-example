import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { PostList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/singlePostPage';

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
        <Route exact path='/posts/:postId' component={SinglePostPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
