import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import App from "./components/App"
import store from "./components/store";

function Application() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
  ReactDOM.render(<Application />, document.getElementById('root'));
