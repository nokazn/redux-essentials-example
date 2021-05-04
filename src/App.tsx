import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { PostList } from './features/posts/PostsList';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <>
            <PostList />
          </>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
