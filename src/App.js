import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/book/:id" component={BookDetail} />
      </Switch>
    </Router>
  );
}

export default App;
