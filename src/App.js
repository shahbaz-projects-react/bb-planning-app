import './App.css';
import 'semantic-ui-css/semantic.min.css'
import BBPage from "./Pages/bb-page";
import ContextProvider from './components/ContextProvider'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <header className="App-header">
          <h2>BB Planning App</h2>
        </header>
        <Container text>
          <BBPage/>
        </Container>
      </ContextProvider>
    </div>
  );
}

export default App;
