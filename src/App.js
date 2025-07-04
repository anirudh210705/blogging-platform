
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  //const person = {name : 'anirudh', age : 19};
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className = "content">
          <Switch>
            <Route exact path = "/">
            <Home />
            </Route>
            <Route exact path = "/create">
            <Create/>
            </Route>
            <Route exact path = "/blogs/:id">
            <BlogDetails/>
            </Route>
            <Route path = "*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
