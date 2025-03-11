import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon: React.FC = () => {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white animate-pulse">
        Coming Soon...
      </h1>
      <button onClick={() => navigate('/courses')} className="flex bg-blue-500 border-2 border-white p-4 rounded-xl text-white items-center gap-4 text-xl flex-row mt-10"><ArrowRight className='w-5 h-5 rotate-180' /> <span>Back to Courses</span></button>
    </div>
  );
};

export default ComingSoon;
