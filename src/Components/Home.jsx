import Banner from "./Banner";

const HomePage = () => {
  return (
    <section className="flex p-4 px-16 py-6 mt-16 ml-28 ">
      <div className="w-1/2">
        <Banner />
      </div>
      <div className="w-1/2 ml-4">
        <header className="pb-2 grid grid-cols-3 grid-rows-3 bg-black text-center py-8 flex justify-evenly">
          <h1 className="text-4xl col-span-3 text-blue-700 row-span-3 ">THINK YOU KNOW MUCH?</h1>
          <h2 className="text-4xl col-span-3 row-span-3 text-white">QUIZZWIZZ allows you to put your knowledge to the test in a fun way</h2>
        </header>

        <main className="pt-6 mt-8 grid grid-cols-3 grid-rows-3 bg-black text text-center py-8 box-border hover:box-content mt-8">
          <h3 className="text-4xl col-span-3 row-span-3 text-blue-700 mb-4">READY TO EXPLORE </h3>
          <h3 className="text-4xl col-span-3 row-span-3 text-white">From the huge library of our fun questions, you will definitely learn something from each new test. Click on take quiz to start right now.</h3>
          <p className="mb-4"></p>
        </main>
      </div>
    </section>
  );
};

export default HomePage;
