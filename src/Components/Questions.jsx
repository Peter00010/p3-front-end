import { useState, useEffect } from 'react';

    const Questions = () => {
    const [question, setQuestion] = useState(null);
    const [choices, setChoices] = useState([]);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchQuestion();
    }, []);

    const fetchQuestion = async () => {
        const response = await fetch('http://127.0.0.1:8000/get-question/1');
        const newData = await response.json();
        setQuestion(newData.question);
        setChoices(newData.choices);
        setData(newData);
    };

    const handleChoiceClick = async (choice) => {
        if (answeredQuestions < 10) {
        await fetchQuestion();
        if (choice === data.answer) {
            setScore(score + 1);
        }
        setAnsweredQuestions(answeredQuestions + 1);
        }
        if (answeredQuestions === 9) {
        alert(`Your score: ${score}/10`);
        }
    };

    return (
        <div className="flex h-screen">
        <div style={{backgroundColor: "#171717",color: "#FFFFFF"}} className="w-64  flex flex-col">
            <div className="flex-grow">
            <div className="flex items-center justify-center h-16">
                <span className="text-4xl font-bold">QUIZZ</span>
                <span style={{color:"#3A55EB"}} className="text-4xl font-bold text-blue-500">WIZZzzzz</span></div>
            <ul className="px-4 py-2">
                <li className="text-xl py-2 cursor-pointer hover:underline">HOME</li>
                <li className="text-xl py-2 cursor-pointer hover:underline">ABOUT US</li>
                <li className="text-xl py-2 cursor-pointer hover:underline">HELP</li>
                <li className="text-xl py-2 cursor-pointer hover:underline">PROFILE</li>
            </ul>
            </div>
        </div>
        <div style={{backgroundColor: "#1F1F1F", color:"#FFFFFF"}} className="flex-1  flex items-center justify-center">
    <div style={{backgroundColor:"#171717", width: '600px', height: '600px'}} className="rounded-lg p-8">
        <span style={{color:"#3A55EB", fontSize:"10rem"}} className="font-bold  block mx-auto mb-8 ml-40">?</span>
        <div className="text-2xl text-center mb-8">
        {question}
        </div>
        <div className="flex flex-wrap">
        {choices.map((choice, index) => (
            <button style={{backgroundColor:"#3A55EB",color:"#FFFFFF" }} key={index} onClick={() => handleChoiceClick(choice)} className=" mx-5 font-bold py-2 px-4 rounded m-2">
            {choice}
            </button>
        ))}
        </div>
    </div>
    </div>

        </div>
    );
    };

export default Questions;