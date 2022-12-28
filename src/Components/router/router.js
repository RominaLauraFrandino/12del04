import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../Home/Home/Home';
import Characters from '../Charaters/Charaters';
import Contact from '../Contact/Contact';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}