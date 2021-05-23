import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { PostList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import { EditPostForm } from './features/posts/EditPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';

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
        <Route exact path='/posts/edit/:postId' component={EditPostForm} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
