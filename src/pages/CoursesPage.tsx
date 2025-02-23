import { useState } from 'react';
import { Book, Volume as VolumeUp, Award, ArrowRight, Home, School, Brain, GraduationCap, BookOpen, MessageSquare, CheckCircle2, XCircle, MoveLeft, ArrowLeft } from 'lucide-react';

function CoursesPage() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showBasicLetters, setShowBasicLetters] = useState(false);
  const [showSimpleWords, setShowSimpleWords] = useState(false);
  const [showInteractiveLearning, setShowInteractiveLearning] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  function SpeakWords(paragraph: string) {
    const words = paragraph.split(" "); // शब्दों को अलग करो

    function speak(text: string, callback: any) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1; // बोलने की स्पीड (0.1 से 10 तक)
        utterance.pitch = 0.5; // आवाज़ की पिच (0 से 2 तक)
        utterance.lang = "en-IN"; // भारतीय अंग्रेज़ी उच्चारण सेट करें
        utterance.onend = callback; // जब एक आवाज़ खत्म हो, तब अगले को बोलो
        speechSynthesis.speak(utterance);
    }
    

    function speakWords(index: any) {
        if (index < words.length) {
            const word = words[index];
            const letters = word.split("").join(" "); // अक्षरों को अलग करो

            // पहले अक्षर बोले, फिर शब्द
            speak(letters, () => {
                speak(word, () => {
                    speakWords(index + 1); // अगले शब्द पर जाओ
                });
            });
        }
    }

    speechSynthesis.cancel(); // पहले से चल रही आवाज़ रोक दो
    speakWords(0); // पहले शब्द से शुरू करो
}

function speakAll(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.5; // बोलने की स्पीड (0.1 से 10 तक)
  utterance.pitch = 1; // आवाज़ की पिच (0 से 2 तक)
  utterance.lang = "en-IN"; // भारतीय अंग्रेज़ी उच्चारण सेट करें
  speechSynthesis.speak(utterance);
}

function Speak(text: string) {
  SpeakWords(text);
  // speakAll(text);
}

const SetAnwers = (e: any) => {
  e.preventDefault();
  const answer = e.target.value;
  setUserAnswer(answer);
}





const letters = [
  { letter: 'A', word: 'Apple', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400' },
  { letter: 'B', word: 'Ball', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=400' },
  { letter: 'C', word: 'Cat', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400' },
  { letter: 'D', word: 'Dog', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400' },
  { letter: 'E', word: 'Elephant', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400' },
  { letter: 'F', word: 'Fish', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=400' },
  { letter: 'G', word: 'Grapes', image: 'https://images.unsplash.com/photo-1615485299673-0704322644de?auto=format&fit=crop&w=400' },
  { letter: 'H', word: 'House', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400' },
  { letter: 'I', word: 'Ice Cream', image: 'https://images.unsplash.com/photo-1606755962774-bb98fc802f28?auto=format&fit=crop&w=400' },
  { letter: 'J', word: 'Juice', image: 'https://images.unsplash.com/photo-1571781926291-c4775f17e5de?auto=format&fit=crop&w=400' },
  { letter: 'K', word: 'Kite', image: 'https://images.unsplash.com/photo-1610912823420-6cc41c307391?auto=format&fit=crop&w=400' },
  { letter: 'L', word: 'Lion', image: 'https://images.unsplash.com/photo-1580048915913-3c5c52e4745e?auto=format&fit=crop&w=400' },
  { letter: 'M', word: 'Mango', image: 'https://images.unsplash.com/photo-1590239519648-1b1ca556bb66?auto=format&fit=crop&w=400' },
  { letter: 'N', word: 'Nest', image: 'https://images.unsplash.com/photo-1579446261476-c36e6cccc485?auto=format&fit=crop&w=400' },
  { letter: 'O', word: 'Orange', image: 'https://images.unsplash.com/photo-1610320877162-2ff7b7115452?auto=format&fit=crop&w=400' },
  { letter: 'P', word: 'Parrot', image: 'https://images.unsplash.com/photo-1519410748251-68db508e19e5?auto=format&fit=crop&w=400' },
  { letter: 'Q', word: 'Queen', image: 'https://images.unsplash.com/photo-1625671047857-d4395d8ef5f5?auto=format&fit=crop&w=400' },
  { letter: 'R', word: 'Rabbit', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400' },
  { letter: 'S', word: 'Sun', image: 'https://images.unsplash.com/photo-1474219822684-df5535e0c2e7?auto=format&fit=crop&w=400' },
  { letter: 'T', word: 'Tree', image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400' },
  { letter: 'U', word: 'Umbrella', image: 'https://images.unsplash.com/photo-1595436065982-e4b24a18db83?auto=format&fit=crop&w=400' },
  { letter: 'V', word: 'Violin', image: 'https://images.unsplash.com/photo-1562094587-9f8b6479a463?auto=format&fit=crop&w=400' },
  { letter: 'W', word: 'Watch', image: 'https://images.unsplash.com/photo-1535269446895-d6eff7a6a6cc?auto=format&fit=crop&w=400' },
  { letter: 'X', word: 'Xylophone', image: 'https://images.unsplash.com/photo-1602788776798-68d952a6e6ed?auto=format&fit=crop&w=400' },
  { letter: 'Y', word: 'Yogurt', image: 'https://images.unsplash.com/photo-1614592599576-1e89eb469dbe?auto=format&fit=crop&w=400' },
  { letter: 'Z', word: 'Zebra', image: 'https://images.unsplash.com/photo-1595433562690-12c61d38f4fc?auto=format&fit=crop&w=400' }
];


  const simpleWords = [
    {
      word: 'Cat',
      phonetic: 'k-æ-t',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400',
      sentence: 'The cat is sleeping.',
      difficulty: 'Easy'
    },
    {
      word: 'Dog',
      phonetic: 'd-ɒ-g',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400',
      sentence: 'The dog plays ball.',
      difficulty: 'Easy'
    },
    {
      word: 'House',
      phonetic: 'h-aʊ-s',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400',
      sentence: 'This is my house.',
      difficulty: 'Medium'
    },
    {
      word: 'Tree',
      phonetic: 't-r-iː',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400',
      sentence: 'The tree is tall.',
      difficulty: 'Easy'
    }
  ];
  

  const dailyScenarios = [
    {
      title: 'At the Market',
      image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=400',
      sentences: [
        { text: 'I need to buy fruits.', audio: new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/need--_us_1.mp3') },
        { text: 'How much is this apple?', audio: new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/much--_us_1.mp3') },
        { text: 'Thank you very much.', audio: new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/thank--_us_1.mp3') }
      ],
      practice: {
        question: 'What do you say to ask the price?',
        correctAnswer: 'How much is this',
        hints: ['Start with "How"', 'Ask about price', 'Use "much"']
      }
    },
    {
      title: 'At Home',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400',
      sentences: [
        { text: 'Please open the window.',},
        { text: 'The food is ready.', },
        { text: 'Time to go to bed.', }
      ],
      practice: {
        question: 'What do you say when dinner is prepared?',
        correctAnswer: 'The food is ready',
        hints: ['Mention "food"', 'Use "is"', 'Ends with "ready"']
      }
    },
    {
      title: 'Meeting People',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400',
      sentences: [
        { text: 'Good morning!',  },
        { text: 'How are you today?', },
        { text: 'Nice to meet you.',  }
      ],
      practice: {
        question: 'What do you say when you first meet someone?',
        correctAnswer: 'Nice to meet you',
        hints: ['Starts with "Nice"', 'Use "to"', 'Ends with "you"']
      }
    }
  ];

  const lessons = [
    {
      letter: 'A',
      word: 'Apple',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400',
      audio: new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/apple--_us_1.mp3')
    },
    {
      letter: 'B',
      word: 'Ball',
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=400',
      audio: new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/ball--_us_1.mp3')
    },
    {
      letter: 'C',
      word: 'Cat',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400',
      audio: new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/cat--_us_1.mp3')
    }
  ];

  const checkAnswer = () => {
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      if (userAnswer.toLowerCase().includes(dailyScenarios[currentScenario].practice.correctAnswer.toLowerCase())) {
        setCurrentScenario((prev) => (prev + 1) % dailyScenarios.length);
        setUserAnswer('');
      }
    }, 2000);
  };

  const features = [
    { icon: <Book className="w-8 h-8" />, title: 'Basic Letters', description: 'Learn the alphabet step by step' },
    { icon: <School className="w-8 h-8" />, title: 'Simple Words', description: 'Start reading basic words' },
    { icon: <Brain className="w-8 h-8" />, title: 'Interactive Learning', description: 'Learn through pictures and sounds' }
  ];

  const InteractiveLearningPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Interactive Learning</h2>
        <button
          onClick={() => setShowInteractiveLearning(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <span> Back to Home</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">{dailyScenarios[currentScenario].title}</h3>
          <img
            src={dailyScenarios[currentScenario].image}
            alt={dailyScenarios[currentScenario].title}
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
        </div>

        <div className="space-y-6 mb-8">
          <h4 className="text-xl font-semibold text-gray-800">Common Phrases:</h4>
          {dailyScenarios[currentScenario].sentences.map((sentence, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700">{sentence.text}</p>
              <button
                onClick={() => Speak(sentence.text)}
                className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
              >
                <VolumeUp className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Practice Time!</h4>
          <p className="text-lg text-gray-700 mb-4">{dailyScenarios[currentScenario].practice.question}</p>
          </div>
        </div>
      </div>
  );

  const SimpleWordsPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Simple Words</h2>
        <button
          onClick={() => setShowSimpleWords(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <span>Back to Home</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {simpleWords.map((word, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">{word.word}</h3>
                {/* <p className="text-gray-500 font-mono">{word.phonetic}</p> */}
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {word.difficulty}
              </span>
            </div>
            
            <div className="relative mb-4">
              <img
                src={word.image}
                alt={word.word}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <button 
                onClick={() => Speak(word.sentence)}
                className="absolute -bottom-4 -right-4 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              >
                <VolumeUp className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-700">Example Sentence:</span>
              </div>
              <p className="text-gray-600 text-lg">{word.sentence}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Click the sound icon to hear the pronunciation
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const BasicLettersPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Basic Letters</h2>
        <button
          onClick={() => setShowBasicLetters(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <span>Back to Home</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {letters.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-6xl font-bold text-blue-600">{item.letter}</span>
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <div className="relative">
              <img 
                src={item.image}
                alt={item.word}
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            <div className="text-2xl font-semibold flex items-center justify-between text-gray-800 mb-2">
              <p>{item.word}</p>
              <button onClick={() => Speak(item.word)} className='bg-blue-600 p-1 rounded-full shadow-lg hover:bg-blue-700 transition-colors' ><VolumeUp className="w-10 h-10 text-white" /></button>
            </div>
            <p className="text-gray-600">
              This is the letter "{item.letter}" as in "{item.word}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const MainContent = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn to Read and Write</h1>
        <p className="text-xl text-gray-600">Start your journey to literacy today</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              if (index === 0) setShowBasicLetters(true);
              if (index === 1) setShowSimpleWords(true);
              if (index === 2) setShowInteractiveLearning(true);
            }}
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Let's Learn Together</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-8xl font-bold text-blue-600">
              {lessons[currentLesson].letter}
            </div>

            <div className="relative">
              <img 
                src={lessons[currentLesson].image} 
                alt={lessons[currentLesson].word}
                className="w-64 h-64 object-cover rounded-lg shadow-md"
              />
              <button 
                onClick={() => Speak(lessons[currentLesson].word)}
                className="absolute -bottom-4 -right-4 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              >
                <VolumeUp className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="text-3xl font-semibold text-gray-800">
              {lessons[currentLesson].word}
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentLesson((prev) => (prev > 0 ? prev - 1 : lessons.length - 1))}
                className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
                <span>Previous</span>
              </button>
              <button
                onClick={() => setCurrentLesson((prev) => (prev < lessons.length - 1 ? prev + 1 : 0))}
                className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 text-blue-600">
          <Award className="w-6 h-6" />
          <span className="text-lg font-semibold">Keep going! You're doing great!</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center">
          <div className="flex items-center  space-x-2">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Literacy For All</span>
          </div>
        </div>
      </nav>

      {showBasicLetters ? <BasicLettersPage /> : 
       showSimpleWords ? <SimpleWordsPage /> : 
       showInteractiveLearning ? <InteractiveLearningPage /> :
       <MainContent />}
    </div>
  );
}

export default CoursesPage;