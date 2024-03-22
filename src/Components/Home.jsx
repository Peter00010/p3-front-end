import Banner from "./Banner";
import brain from "../assets/brain.svg";
import idea from "../assets/idea.svg";

const HomePage = () => {
  return (
    
      <div className="flex justify-start p-4 px-16 py-6 mt-16 ml-28 bg-black ml-0 mt-0">
        <div className="w-1/2">
          <Banner />
        </div>
        <div className="w-1/2 ml-4">
        <div className="relative flex justify-end  mr-2">
            <div className="h-16 w-16 bg-white rounded-full"></div></div><br />
          <header className="pb-2 grid grid-cols-3 grid-rows-3 bg-black text-center py-8 flex justify-evenly border rounded-lg overflow-hidden">

            <h1 className="text-4xl col-span-3 text-blue-700 row-span-3">THINK YOU KNOW MUCH?</h1>
           
            <h2 className="text-4xl col-span-3 row-span-3 text-white">QUIZZWIZZ allows you to put your knowledge to the test in a fun way</h2>
          </header>

          <div className=" px-1 py-2 mt-2 pb-4 pt-4 bg-black border rounded-lg overflow-hidden ">
            <img  src={brain} alt="" className="h-40 w-auto ml-64 filter brightness-125 contrast-150 invert" />
          </div>

          <main className="pt-4 mt-3 grid grid-cols-3 grid-rows-3 bg-black text text-center py-2 box-border hover:box-content mt-8 border rounded-lg overflow-hidden">
            <h3 className="text-3xl col-span-3 row-span-3 text-blue-700 mb-4">READY TO EXPLORE</h3>
            <p className=" text-2xl col-span-3 row-span-3 text-white mb-4">From the huge library of our fun questions, you will definitely learn something from each new test. Click on take quiz to start right now.</p>
          </main>
        
          <div className="px-1 py-2 mt-2 pb-4 pt-4 bg-black border rounded-lg overflow-hidden ">
            <img  src={idea} alt="" className="h-24 w-auto ml-64 filter brightness-125 contrast-150 invert" />
          </div>
          

            <button className=" border rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-5 text-2xl mt-1 ml-60 rounded">
              Take Test
            </button>
        
        </div>
      </div>
   
  );
};

export default HomePage;
