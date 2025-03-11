import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";
import ComingSoon from "./custom_components/demo";


function App() {
  
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/demo" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}



export default App;