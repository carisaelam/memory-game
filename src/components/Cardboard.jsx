import '/src/assets/Cardboard.css';

export default function Cardboard() {
  const ids = [400, 401, 402, 403, 404, 405, 406, 407];

  return (
    <div className="app__container">
      <h1>Memory Game</h1>
      <div className="card__container">
        {ids.map((id) => {
          const url = `https://picsum.photos/id/${id}/500`;
          return (
            <div key={id} className="image__container">
              <img className="memory__image" src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
