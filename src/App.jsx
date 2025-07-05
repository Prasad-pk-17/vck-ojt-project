 
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import PGAdmissionPage from "./pages/PGAdmissionPage";

import './styles/Pages.css' 
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";

  const App = () => {
    const [showPopup, setShowPopup] = useState(true);
    const handleClosePopup = () => {
    setShowPopup(false);
  };






    return (
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Prasad Pandurang Kumbhar"
          studentPhotoUrl="/images/pop.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>


      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/admissions" element={<PGAdmissionPage/>}/>
          </Routes>
          <ChatbotComponent/>
        </Router>

      </div>

    </>
    )
  }
export default App;

