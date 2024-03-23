import React from 'react';

const Help = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '400px', height: '100vh', backgroundColor: '#171717' }}>
        <div className="logo">
          <div className="pt-12 pl-8">
            <span style={{ color: "#3A55EB", fontSize: "2rem" }}>QUIZZ</span>
            <br />
            <span style={{ color: "#FFFFFF", fontSize: "2rem" }}>WIZZ</span>
          </div>
        </div>
        <section className="pt-40 pl-8" style={{ color: "#FFFFFF" }} >
          <ul className="cursor-pointer text-xl">
            <li className="py-3">HOME</li>
            <li className="py-3">ABOUT US</li>
            <li className="py-3">HELP</li>
            <li className="py-3">PROFILE</li>
          </ul>
        </section>
      </div>
      <div style={{ flex: '1', backgroundColor: '#1F1F1F', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="help-container bg-black text-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <div className="help-content mb-8">
            <h2 className="text-2xl font-bold mb-4">Quiz App Help</h2>
            <nav className="mb-4">
              <ul className="flex">
                <li className="mr-4">
                  <a href="#getting-started" className="text-blue-500 hover:text-blue-300">
                    Getting Started
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#quiz-rules" className="text-blue-500 hover:text-blue-300">
                    Quiz Rules
                  </a>
                </li>
                <li>
                  <a href="#how-to-guidelines" className="text-blue-500 hover:text-blue-300">
                    How-to Guidelines
                  </a>
                </li>
              </ul>
            </nav>
            <section id="getting-started" className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Getting Started:</h3>
              <p className="text-base mb-4">
                Welcome to the Quiz App! This app allows you to test your knowledge on various subjects.
              </p>
            </section>
            <section id="quiz-rules" className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Quiz Rules:</h3>
              <p className="text-base mb-4">
                Here are the rules for participating in quizzes.
              </p>
            </section>
            <section id="how-to-guidelines" className="mb-8">
              <h3 className="text-lg font-semibold mb-2">How-to Guidelines:</h3>
              <p className="text-base mb-4">
                Follow these guidelines to make the most out of the app.
              </p>
            </section>
          </div>
          <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;


