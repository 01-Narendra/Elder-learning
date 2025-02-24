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
    </div>
  );
}



export default App;