import { useState } from 'react';
import { Book, Volume as VolumeUp, Award, ArrowRight, School, Brain, GraduationCap, BookOpen, Menu } from 'lucide-react';
import logo from '../public/logo.png'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MobileNavLink } from '@/custom_components/Navlink';


function CoursesPage() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showBasicLetters, setShowBasicLetters] = useState(false);
  const [showSimpleWords, setShowSimpleWords] = useState(false);
  const [showInteractiveLearning, setShowInteractiveLearning] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<number>(0);

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


const letters = [
  { letter: 'A', word: 'Apple', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400' },
  { letter: 'B', word: 'Ball', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=400' },
  { letter: 'C', word: 'Cat', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400' },
  { letter: 'D', word: 'Dog', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400' },
  { letter: 'E', word: 'Elephant', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400' },
  { letter: 'F', word: 'Fish', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=400' },
  { letter: 'G', word: 'Grapes', image: 'https://images.unsplash.com/photo-1625499940894-8796928bf9c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGVzfGVufDB8fDB8fHww' },
  { letter: 'H', word: 'House', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400' },
  { letter: 'I', word: 'Ice Cream', image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww' },
  { letter: 'J', word: 'Juice', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8fDA%3D' },
  { letter: 'K', word: 'Kite', image: 'https://images.unsplash.com/photo-1534640881905-039ca1e21a81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpdGV8ZW58MHx8MHx8fDA%3D' },
  { letter: 'L', word: 'Lion', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { letter: 'M', word: 'Mango', image: 'https://plus.unsplash.com/premium_photo-1724255863045-2ad716767715?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ298ZW58MHx8MHx8fDA%3D' },
  { letter: 'N', word: 'Nest', image: 'https://images.unsplash.com/photo-1504980927740-d1cc11dccf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVzdHxlbnwwfHwwfHx8MA%3D%3D' },
  { letter: 'O', word: 'Orange', image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww' },
  { letter: 'P', word: 'Parrot', image: 'https://plus.unsplash.com/premium_photo-1673454201378-3867e051dca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFycm90fGVufDB8fDB8fHww' },
  { letter: 'Q', word: 'Queen', image: 'https://plus.unsplash.com/premium_photo-1695792938224-4fd327c05097?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVlZW58ZW58MHx8MHx8fDA%3D' },
  { letter: 'R', word: 'Rabbit', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww' },
  { letter: 'S', word: 'Sun', image: 'https://plus.unsplash.com/premium_photo-1681488104322-8bd081b57509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1bnxlbnwwfHwwfHx8MA%3D%3D' },
  { letter: 'T', word: 'Tree', image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400' },
  { letter: 'U', word: 'Umbrella', image: 'https://images.unsplash.com/photo-1541697183324-e15d407c91cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW1icmVsbGF8ZW58MHx8MHx8fDA%3D' },
  { letter: 'V', word: 'Violin', image: 'https://plus.unsplash.com/premium_photo-1681277984980-cfe335a4371b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlvbGlufGVufDB8fDB8fHww' },
  { letter: 'W', word: 'Watch', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { letter: 'X', word: 'Xylophone', image: 'https://images.unsplash.com/photo-1613941883931-f231c2153e41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eHlsb3Bob25lfGVufDB8fDB8fHww' },
  { letter: 'Y', word: 'Yak', image: 'https://images.unsplash.com/photo-1549874682-13ffd26ee224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFrfGVufDB8fDB8fHww' },
  { letter: 'Z', word: 'Zebra', image: 'https://plus.unsplash.com/premium_photo-1661855211054-080ea7944065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8emVicmVhfGVufDB8fDB8fHww' }
];


const simpleWords = [
  {
    word: 'Cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400',
    sentence: 'The cat is sleeping.',
    difficulty: 'Easy'
  },
  {
    word: 'Dog',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400',
    sentence: 'The dog plays ball.',
    difficulty: 'Easy'
  },
  {
    word: 'House',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400',
    sentence: 'This is my house.',
    difficulty: 'Medium'
  },
  {
    word: 'Tree',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400',
    sentence: 'The tree is tall.',
    difficulty: 'Easy'
  },
  {
    word: 'Car',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400',
    sentence: 'The car is fast.',
    difficulty: 'Easy'
  },
  {
    word: 'Book',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400',
    sentence: 'She reads a book.',
    difficulty: 'Easy'
  },
  {
    word: 'Apple',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400',
    sentence: 'He eats an apple.',
    difficulty: 'Easy'
  },
  {
    word: 'Chair',
    image: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=400',
    sentence: 'The chair is wooden.',
    difficulty: 'Easy'
  },
  {
    word: 'Bicycle',
    image: 'https://plus.unsplash.com/premium_photo-1683121324815-a75a7332213d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnljeWNsZXxlbnwwfHwwfHx8MA%3D%3D',
    sentence: 'She rides a bicycle.',
    difficulty: 'Medium'
  },
  {
    word: 'Sun',
    image: 'https://plus.unsplash.com/premium_photo-1681488104322-8bd081b57509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1bnxlbnwwfHwwfHx8MA%3D%3D',
    sentence: 'The sun is shining.',
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

  const features = [
    { icon: <Book className="w-8 h-8" />, title: 'Basic Letters', description: 'Learn the alphabet step by step' },
    { icon: <School className="w-8 h-8" />, title: 'Simple Words', description: 'Start reading basic words' },
    { icon: <Brain className="w-8 h-8" />, title: 'Interactive Learning', description: 'Learn through pictures and sounds' }
  ];

  const InteractiveLearningPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex mt-10 items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Interactive Learning</h2>
        <button
          onClick={() => setShowInteractiveLearning(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <ArrowRight className='w-5 h-5 rotate-180' /> <span>Back</span>
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

        <div className='flex items-center mt-5 justify-between'>
          <button className='bg-blue-600 py-3 px-5 font-semibold text-white rounded-full flex flex-row items-center space-x-2' onClick={() => setCurrentScenario((prev) => (prev > 0 ? prev - 1 : dailyScenarios.length - 1))}> <ArrowRight className='w-5 h-5 rotate-180' /> <span>Prev</span></button>
          <button className='bg-blue-600 py-3 px-5 font-semibold text-white rounded-full flex flex-row items-center space-x-2' onClick={() => setCurrentScenario((prev) => (prev < dailyScenarios.length-1 ? prev + 1 : 0))}> <span>Next</span> <ArrowRight className='w-5 h-5' /></button>
        </div>
      </div>
  );

  const SimpleWordsPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex mt-10 items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Simple Words</h2>
        <button
          onClick={() => setShowSimpleWords(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <ArrowRight className='w-5 h-5 rotate-180' /> <span>Back</span>
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
      <div onClick={() => setShowSimpleWords(false)} className='flex items-center space-x-2 text-white mt-10 py-3 px-4 bg-blue-600 rounded-full w-[30%] ml-[67%] justify-center'>
        <ArrowRight className='w-5 h-5 rotate-180' /> <span>Back</span>
      </div>
    </div>
  );

  const BasicLettersPage = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex mt-10 items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Basic Letters</h2>
        <button
          onClick={() => setShowBasicLetters(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <ArrowRight className='w-5 h-5 rotate-180' /> <span>Back</span>
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
      <button
          onClick={() => setShowBasicLetters(false)}
          className="bg-blue-600 text-white px-6 py-2 mt-10 ml-[67%] rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <ArrowRight className='w-5 h-5 rotate-180' /> <span>Back</span>
        </button>
    </div>
  );

  const MainContent = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl mt-10 font-bold text-gray-900 mb-4">Learn to Read and Write</h1>
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
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white z-50 flex py-2 px-4 fixed w-full flex-row justify-between shadow-md">
        <div className="flex items-center justify-center space-x-2">
          <img src={logo} alt="logo" className='h-12 w-12 ' />
          <span className="text-lg transform scale-y-150 font-bold text-blue-600">Literacy For All</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button > <Menu className='w-6 h-6' /> </button>
          </SheetTrigger>
          <SheetContent className='bg-gradient-to-b from-[#a1ffce] to-[#faffd1]'> 
            <img src={logo} alt="logo" className='h-14 w-14 ml-5' />
            <div className="flex flex-col gap-4 p-4">
              <MobileNavLink href="/" text="Home" />
              <MobileNavLink href="/courses" text="Courses" />
              <MobileNavLink href="/#testimonials" text="Testimonials" />
              <MobileNavLink href="/#contact" text="Contact" />
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {showBasicLetters ? <BasicLettersPage /> : 
       showSimpleWords ? <SimpleWordsPage /> : 
       showInteractiveLearning ? <InteractiveLearningPage /> :
       <MainContent />}
    </div>
  );
}

export default CoursesPage;