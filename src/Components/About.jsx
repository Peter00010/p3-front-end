import React, { useState } from 'react';
import Banner from './Banner'; // Import the Banner component

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      // Add the new comment to the list of comments
      setComments([...comments, comment]);
      // Clear the comment input field
      setComment('');
      // Pass the comment to the parent component for further processing
      addComment(comment);
      // Display an alert with a thank you message
      alert("Thank you for your comment!");
    }
  };

  return (
    <div className="flex justify-between">
      {/* Banner component on the left */}
      <div>
        <Banner />
      </div>
      {/* CommentForm component on the right */}
      <div className="absolute top-0 left-80 p-20">
    <div className="rounded-lg max-w-xl mx-auto text-center border-8 bg-sky-500 border-black p-8">
      <h2 className="text-4xl font-bold mb-4">
  <span className="text-blue-800 underline">ABOUT US</span>
</h2>
      <p className="text-2xl mb-4">Welcome to our quiz app! We are passionate about providing an engaging and educational experience for our users.</p>
      <p className="text-2xl mb-4">Our mission is to create fun and challenging quizzes that test your knowledge on various topics.</p>
      <p className="text-2xl mb-4">Feel free to explore our app and challenge yourself with our quizzes. If you have any feedback or suggestions, we'd love to hear from you!</p>
      <p className="text-2xl">Thank you for choosing our quiz app.</p>
    
    </div>
  </div>
  <div className='relative'></div>
  <hr className="absolute bottom-60 left-0 w-full border-t-2 border-black"></hr>
  <div className="absolute bottom-40 -left-80 w-full text-center">
    <p className="text-xl font-bold underline hover:text-blue-500 ">VERSION</p>
    <p className="text-lg">22.41.34</p>
</div>


  <div className='absolute bottom-20 -left-80 w-full text-center'> 
    <p className='text-xl font-bold underline hover:text-blue-500'>REQUIRES ANDROID</p>
    <p className='text-lg'>5.0 and above</p>
</div>


  <div className='absolute bottom-0 -left-80 w-full text-center'>
<p className='text-xl font-bold underline hover:text-blue-500'>CONTENT RATING</p>
<p className='text-lg'>rated for 3+</p>
 </div>


  <div className='absolute bottom-40 -left-0 w-full text-center'>
     <p className='text-xl font-bold underline hover:text-blue-500'>UPDATED ON</p>
     <p className='text-lg'>March 20th 2024</p>
  </div>


<div className='absolute bottom-20 -left-0 w-full text-center'>
     <p className='text-xl font-bold underline hover:text-blue-500'>DOWNLOADS</p>
     <p className='text-lg'>50,000+ downloads</p>


</div>


<div className='absolute bottom-0 -left-0 w-full text-center'>
  <p className='text-xl font-bold underline hover:text-blue-500'>RELEASED ON</p>
  <p className='text-lg'>july 18,2019</p>
</div>


<div className='absolute bottom-40 left-60 w-full text-center'>
  <p className='text-xl font-bold underline '>OFFERED BY</p>
  <p className='text-lg'>23Apps.com</p>
</div>


      <div className="flex-1/2 min-h-screen p-8  bg-sky-500 rounded-lg shadow-md">
        <h1 className="font-bold"> FEEDBACK FORM </h1>
        <form className="comment-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="emailInput"
            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
          <textarea
            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="block w-full px-4 py-2 text-black bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
            type="submit"
          >
            Comment
          </button>
        </form>
        {/* Render comments below the form */}
        <div className="mt-4">
          <h2 className="text-lg  font-semibold">REVIEWS</h2>
          {comments.map((comment, index) => (
            <p key={index} className="mt-2">{comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
