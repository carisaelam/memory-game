import '/src/assets/Cardboard.css';
import shuffle from '/src/utils/shuffle.js';
import { useState, useEffect } from 'react';

export default function Cardboard() {
  const [ids, setIds] = useState([400, 401, 402, 403, 404, 405, 406, 407]);

  const [clickedIds, setClickedIds] = useState([]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(e) {
    setIds(shuffle(ids));
    console.log('e.target.id', Number(e.target.id));

    if (clickedIds.includes(Number(e.target.id))) {
      console.log('GAME OVER');
      setScore(0);
      setClickedIds([]);
      if (score > highScore) {
        setHighScore(score);
      }
      return;
    }

    setClickedIds((prevClickedIds) => [...prevClickedIds, Number(e.target.id)]);

    setScore((prevScore) => prevScore + 1);

    if (score >= ids.length - 1) {
      console.log('YOU WIN');
    }
  }

  // DEBUGGING
  useEffect(() => {
    console.log('clicked ids changed. updated array: ', clickedIds);
  }, [clickedIds]);

  return (
    <div className="app__container">
      <h1>Memory Game</h1>
      <h2>
        Score: {score}/{ids.length}
      </h2>
      <h3>High Score: {highScore}</h3>
      <div className="card__container">
        {ids.map((id) => {
          const url = `https://picsum.photos/id/${id}/500`;
          return (
            <div key={id} className="image__container" onClick={handleClick}>
              <img id={id} className="memory__image" src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
