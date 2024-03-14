import Navbar from "./navbar";
import Home from "./home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Create from "./create";
import BlogDetails from "./blogDetails";

function App() {
  // #3. we create a dynamic value in ths 'const' give it a title and retuen it in the curly brackets.
  return (
    <Router>
      <div className="App">
        {/* after we import the navbar, we nest it. It is a self closing tag. */}
        <Navbar />
        {/* #19. This is were our page content will go when to go to different pages */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
