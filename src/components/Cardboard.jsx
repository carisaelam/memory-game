import '/src/assets/Cardboard.css';
import shuffle from '/src/utils/shuffle.js';
import { useState, useEffect } from 'react';

export default function Cardboard() {
  const [ids, setIds] = useState([400, 401, 402, 403, 404, 405, 406, 407]);

  const [clickedIds, setClickedIds] = useState([]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState('Memory Game');

  useEffect(() => {
    setIds(shuffle(ids));
  }, []);

  function handleClick(e) {
    setMessage('Memory Game');
    setIds(shuffle(ids));

    if (clickedIds.includes(Number(e.target.id))) {
      setHighScore((prevHighScore) =>
        score > prevHighScore ? score : prevHighScore
      );
      setScore(0);
      setClickedIds([]);
      setMessage('GAME OVER');
      return;
    }

    setClickedIds((prevClickedIds) => [...prevClickedIds, Number(e.target.id)]);

    setScore((prevScore) => {
      const newScore = prevScore + 1;
      if (newScore >= ids.length) {
        setHighScore((prevHighScore) =>
          newScore > prevHighScore ? newScore : prevHighScore
        );
        setMessage('YOU WIN!');
      }
      return newScore;
    });
  }

  function handleReset() {
    setScore(0);
    setHighScore(0);
    setClickedIds([]);
    setIds(shuffle(ids));
    setMessage('Memory Game');
  }

  // DEBUGGING
  useEffect(() => {
    console.log('clicked ids changed. updated array: ', clickedIds);
  }, [clickedIds]);

  useEffect(() => {
    console.log('high score updated: ', highScore);
  }, [highScore]);

  // eslint-disable-next-line react/prop-types
  function Card({ id }) {
    const url = `https://picsum.photos/id/${id}/500`;

    return (
      <div key={id} className="image__container" onClick={handleClick}>
        <img id={id} className="memory__image" src={url} />
      </div>
    );
  }

  const containerStyle = {
    backgroundColor:
      message === 'GAME OVER'
        ? 'red'
        : message === 'YOU WIN!'
          ? 'dodgerblue'
          : 'white',
  };

  return (
    <div className="app__container" style={containerStyle}>
      <div className="header__container">
        <h1>{message}</h1>
        <h2>
          Score: {score}/{ids.length}
        </h2>
        <h3>High Score: {highScore}</h3>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="card__container">
        {ids.map((id) => {
          return <Card key={id} id={id} />;
        })}
      </div>
    </div>
  );
}
