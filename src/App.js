import 'bulma/css/bulma.min.css';
import CardPicture from './CardPicture';
import ScoreBoard from './ScoreBoard';
import CardMemory from './Data';

function App() {
 
  return (
    <div className="">
    <ScoreBoard />
    { CardMemory.map((card) => { 
      
      return (
        <CardPicture image={card.img} name={card.language} key={card.id} />

    )})}
    </div>
  );
}

export default App;
