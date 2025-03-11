import React from "react";
import { Volume as VolumeUp, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
}

const SimpleCard: React.FC<CardProps> = ({ title }) => {

    const navigate = useNavigate();
    const speakTitle = (title: string) => {
        const speech = new SpeechSynthesisUtterance(title);
        speech.lang = "hi-IN"; // Set Indian accent
        speech.rate = 1; // Adjust speed if needed
        speech.pitch = 1;
        
        speechSynthesis.speak(speech);
      };

  return (
    <div className="bg-white ml-4 mb-7 shadow-lg rounded-2xl p-6 w-80 flex flex-col items-center space-y-4 border">
      <h2 className="text-xl font-semibold text-gray-800 text-center">{title}</h2>
      
      <div className="flex space-x-4">
        <button onClick={() => navigate('/course/demo')} className="bg-blue-600 p-2 rounded-xl hover:bg-blue-700 text-white flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Open Course
        </button>
        
        <button 
            onClick={() => speakTitle(title)}
            className="bg-blue-600 p-3 rounded-full shadow-lg"
            >
            <VolumeUp className="w-6 h-6 text-white" />
            </button>
      </div>
    </div>
  );
};

export default SimpleCard;
