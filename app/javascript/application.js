import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"
import store from "./components/store";

function Application() {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    
    );
  }
  ReactDOM.render(<Application />, document.getElementById('root'));
