import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/authentication/login';
import Signup from './components/authentication/signup';
import Blogs from './components/Blogs/Blogs';
import BlogsCustom from './components/Blogs/BlogsCustom';
import Rating from './components/UserRating/Rating';
import MentalHealthBasic from './components/MentalHealthBasic/MentalHealthBasic';
import MoreOn from './components/MoreOn/MoreOn';
import Uploading from './components/Uploading/Uploading';

function App() {

  return (
  <div>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogscustom' element={<BlogsCustom/>}/>
      <Route path='/rating' element={<Rating/>}/>
      <Route path='/mentalbasic' element={<MentalHealthBasic/>}/>
      <Route path='/more' element={<MoreOn/>}/>
      <Route path='/uploading' element={<Uploading/>}/>
    </Routes>
    </Router>
  </div>  
  )
}

export default App
