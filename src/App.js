import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/cakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <CakeContainer />
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
