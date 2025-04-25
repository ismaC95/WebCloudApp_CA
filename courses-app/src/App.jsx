import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CourseDisplay from './pages/CourseDisplay';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coursedisplay" element={<CourseDisplay />} /> {/*PH for course id */}
      </Routes>
    </Router>
  );

  //return <h1>Hello World</h1>;
};

export default App;
