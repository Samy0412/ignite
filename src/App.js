import Home from "./pages/Home";
import { Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
