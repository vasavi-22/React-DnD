import logo from './logo.svg';
import './App.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: process.env.PUBLIC_URL + '/images/gary.webp'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: process.env.PUBLIC_URL + '/images/cato.jpg'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: process.env.PUBLIC_URL + '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: process.env.PUBLIC_URL + '/images/mooncake.webp'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: process.env.PUBLIC_URL + '/images/quinn.jpg'
  }
]


function App() {
  return (
    <div className="App">
      <ul className="characters">
        {
          finalSpaceCharacters.map(({id,name,thumb}) => {
            return(
              <li key={id}>
                <div className="character-thumb">
                  <img src={thumb} alt={`${name} Thumb`} style={{width:'200px', height:'150px'}}/>
                </div>
                <p>{name}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
