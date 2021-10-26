import 'bulma/css/bulma.min.css';
import CardPicture from './CardPicture';
import ScoreBoard from './ScoreBoard';
//import images from './Images.js';

const images = [{"language": 'Angular', "img": './img/angular.png', id: 1}, 
                {"language": 'C#', "img": './img/c#.png', id: 2}, 
                {"language": 'Css', "img": './img/css.png', id: 3}, 
                {"language": 'Elixir', "img": './img/elixir.jpeg', id: 4}, 
                {"language": 'Html5', "img": './img/html.png', id: 5}, 
                {"language": 'Java', "img": './img/java.png', id: 6}, 
                {"language": 'Javascrip', "img": './img/js.png', id: 7}, 
                {"language": 'Kotlin', "img": './img/kotlin.png', id: 8}, 
                {"language": 'Nodejs', "img": './img/node.jpeg', id: 9}, 
                {"language": 'Php 8', "img": './img/php.png', id: 10}, 
                {"language": 'Python 3', "img": './img/python.jpeg', id: 11}, 
                {"language": 'Reactjs', "img": './img/react.png', id: 12}, 
];

function App() {
 
  return (
    <div className="">
    <ScoreBoard />
    <div className="container has-text-centered">
      <div className="columns is-multiline">
      { images.map((card) => { 
        
        return (
          <CardPicture image={card.img} name={card.language} key={card.id} />

      )})}
      </div>
    </div>
    </div>
  );
}

export default App;
