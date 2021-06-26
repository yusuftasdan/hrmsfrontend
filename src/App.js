import './App.css';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import SignedOutHome from './pages/SignedOutHome'
import {Container} from 'semantic-ui-react'

function App() {
  return (
    <div className="App" >
      <Navi/>
      <Container  className='main'>
        <SignedOutHome/>
      </Container>
      
    </div>
  );
}

export default App;
