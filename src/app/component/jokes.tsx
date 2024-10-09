"use client"
import React, { useState, useEffect } from 'react';

export default function JokeGenerator() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await response.json();
    setJoke(`${data.setup} 🤔 - ${data.punchline} 😂`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 ">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full h-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Random Joke Generator</h1>
        <p className="text-xl text-gray-700 mb-6">{joke || "Loading..."}</p>
        <button 
          onClick={fetchJoke} 
          className="bg-purple-600 text-white font-semibold py-2 px-4 mt-5 rounded-lg hover:bg-purple-700 transition duration-300">
          Get Another Joke
        </button>
      </div>
    </div>
  );
}
