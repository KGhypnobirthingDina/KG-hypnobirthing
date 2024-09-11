
import Homepage from './pages/Homepage';
import Refund from './pages/Refund';
import QuestionsAndAnswers from "./pages/QuestionsAndAnswers"
import Articles from './pages/Articles';
import ContactPage from "./pages/ContactPage"
import Recommendations from "./pages/Recommendations"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Calendar from './pages/Calendar';
import FirstArticle from './pages/FirstArticle';
function App() {
    return(
    <BrowserRouter>
    <Routes>
        <Route index element={<Homepage />} />
        <Route path='questionsAndAnswers' element={<QuestionsAndAnswers  />} />
        <Route path='Recommendations' element={<Recommendations />} />
        <Route path='Articles' element={<Articles />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='Refund' element={<Refund />} />
        <Route path='FirstArticle' element={<FirstArticle />} />
    


</Routes>
</BrowserRouter>
)}

export default App;
