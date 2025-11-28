import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Second Pages Components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Instructors from "./Pages/Instructors";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Programming from "./Pages/Programming";
import Science from "./Pages/Science";
import Mathematics from "./Pages/Mathematics";
import Languages from "./Pages/Languages";
import BusinesCourse from "./Footer-Pages/BusinessCourse";


// Footer Section 
import Events from "./Footer-Pages/Events";
import WebDevelopment from "./Footer-Pages/WebDevelopment";
import DataScience from "./Footer-Pages/DataScience";
import MobileDevelopmet from "./Footer-Pages/MobileDevelopment";
import AIMachineLearning from "./Footer-Pages/AIMachineLearning";
import HelpCenter from "./Footer-Pages/HelpCenter";
import Faq from "./Footer-Pages/Faq";
import PrivacyPolicy from "./Footer-Pages/PrivacyPolicy";
import TermsOfServices from "./Footer-Pages/TermsOfServices";
import ContactSupport from "./Footer-Pages/ContactSupport";





function App() {
  return (
  <Router>
      <Navbar />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="instructors" element={<Instructors />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="programming" element={<Programming />} />
      <Route path="science" element={<Science />} />
      <Route path="mathematics" element={<Mathematics />} />
      <Route path="languages" element={<Languages />} />

               {/* Footer pages  */}
      <Route path="events" element={<Events />} />
      <Route path="webdevelopment" element={<WebDevelopment />} />
      <Route path="datascience" element={<DataScience />} />
      <Route path="mobiledevelopment" element={<MobileDevelopmet />} />
      <Route path="AIMachineLearning" element={<AIMachineLearning />} />
     <Route path="businesscourse" element={<BusinesCourse />} />
     <Route path="helpcenter" element={<HelpCenter />} />
     <Route path="faq" element={<Faq />} />
     <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="termsofservices" element={<TermsOfServices />} />
      <Route path="contactsupport" element={<ContactSupport />} />

    </Routes>
      <Footer />
    </Router>
  );
}

export default App;
