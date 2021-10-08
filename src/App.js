import 'bulma/css/bulma.min.css';
import CardPicture from './CardPicture';
import ScoreBoard from './ScoreBoard';

function App() {
  const cardTitles = ['Angular','C#', 'Css', 'Elixir', 
                      'HTML', 'Java', 'JavaScript', 'Kotlin', 
                      'Node', 'PHP', 'Python', 'React', 
                      'Ruby', 'Rust', 'Wordpress'];

  return (
    <div className="">
    <ScoreBoard />
    <CardPicture />
    </div>
  );
}

export default App;
