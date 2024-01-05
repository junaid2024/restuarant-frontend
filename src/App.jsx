import './App.css';
import { Route, Routes} from 'react-router-dom';
import AllRest from './Components/AllRest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewRest from './Components/ViewRest';

function App() {
  return (
    <div className="App">
      
      <header>
        <Header />
      </header>


      <section>
       <Routes>
        <Route path='/' element={<AllRest/>}/>
        <Route path='/view/:id' element={<ViewRest/>}/>

       </Routes>
      </section>


      <Footer>
        <Footer />
      </Footer>

    </div>
  );
}

export default App;
