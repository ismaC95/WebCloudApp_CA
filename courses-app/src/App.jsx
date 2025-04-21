import { Routes, Route } from 'react-router-dom';
import CourseList from './pages/CourseList';
function App() {

  return (
    <>
      <Routes>
        <Route path ="/" element={<CourseList/>}/>
        {/* <Route path ="courses" element = {<CourseList/>}/> */}
      </Routes>
    </>
  )
}

export default App
