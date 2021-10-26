import 'bulma/css/bulma.min.css';
import CardPicture from './CardPicture';
import ScoreBoard from './ScoreBoard';
import images from './Images.js';

function App() {
 
  return (
    <div className="">
    <ScoreBoard />
    { images.map((card) => { 
      
      return (
        <CardPicture image={card.img} name={card.language} key={card.id} />

    )})}
    </div>
  );
}

export default App;
