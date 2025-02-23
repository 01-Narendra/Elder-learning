
import { Book, Video, Headphones, FileText } from 'lucide-react';

interface LessonFormat {
  type: 'video' | 'audio' | 'quiz' | 'pdf';
  title: string;
}

 export interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  lessons: LessonFormat[];
  index: number
}

export function CourseCard({ title, index, description, image, lessons }: CourseCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'audio':
        return <Headphones className="w-4 h-4" />;
      case 'quiz':
        return <Book className="w-4 h-4" />;
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${index%2 === 0 ? 'md:ml-[20%]': 'ml-0'} cursor-pointer bg-white md:w-[70%] dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105  duration-300`}>
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover p-2 rounded-lg shadow-md"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">Available Formats:</h4>
          <div className="flex flex-wrap gap-2">
            {lessons.map((lesson, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
              >
                {getIcon(lesson.type)}
                <span className="ml-1">{lesson.title}</span>
              </span>
            ))}
          </div>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Start Learning
        </button>
      </div>
    </div>
  );
}