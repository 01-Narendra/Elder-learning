import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";


function App() {
  
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      {/* Footer */}
      <footer id="contact" className={` bg-gray-600`}>
        <div className="max-w-7xl py-8 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-white text-lg mb-4">EasyEnglish</h3>
              <p className="text-gray-400">
                Making English learning accessible and enjoyable for elderly learners.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Contact Us</h3>
              <p className="text-gray-400 hover:text-white">
                📧 support@easyenglish.com<br />
                📞 +91 1234567890
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-100">&copy; All rights reserved</p>
      </footer>

    </div>
  );
}



export default App;