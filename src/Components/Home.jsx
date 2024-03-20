import Banner from "./Banner";


const HomePage = () => {
  return (
    
  
  
    <section className="bg-gray-100 p-8 relative">
    <header className="grid grid-cols-3 grid-rows-3 bg-blue-500 text-white text-center py-8 box-border hover:box-content">
      <h1 className="text-4xl col-span-3 row-span-3">THINK YOU KNOW MUCH?</h1>
      <h2  className="text-4xl col-span-3 row-span-3">QUIZZWIZZ allows you to put your knowledge to the test in a fun way</h2>
    </header>
    <main className="grid grid-cols-3 grid-rows-3 bg-blue-500 text-white text-center py-8 box-border hover:box-content mt-8">
      <h2 className="text-2xl col-span-3 row-span-3 mb-4">READY TO EXPLORE  </h2>
      <p className="mb-4">

      </p>
    </main>
    <Banner/>
  </section>
        
      );
    };
    
  

 


export default HomePage;

