import "./App.css";
import React from "react";
import 'assets/scss/style';

function App() {
  return <div className="App">
    <Router>
      <Route path="/" component={LandingPage}></Route>
    </Router>
  </div>
}

export default App;
