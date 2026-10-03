import { useState } from "react";

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <section className="utility-card">
      <h2>Random Number Generator</h2>

      <div className="random-display">
        {randomNumber === null ? (
          <p>No number generated yet</p>
        ) : (
          <p>{randomNumber}</p>
        )}
      </div>

      <button onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </section>
  );
}

export default RandomNumber;