import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import { Registration } from './Component/Registration';
import { Error } from './Component/Error';
import { PageLayout } from './Component/PageLayout';



function App() {
  return ( 
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<PageLayout />}  >  
       <Route index element={<Home />} />
       <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />}  />
        <Route path='/Registration' element={<Registration />} />
        <Route path='*' element={<Error />}/>
      </Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
