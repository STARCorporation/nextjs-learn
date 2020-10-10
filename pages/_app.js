import "../styles/globals.css";

import { Provider } from "react-redux";
import rootReducer from "../reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
