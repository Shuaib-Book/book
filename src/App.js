import logo from './logo.svg';
import './App.css';

function App() {
  const style={
    backgroundColor: '#125468',
    width: '200px',
    color: 'yellow',
    height: '200px',
    border: '3px solid #73AD21',
    borderRadius: '10px',
    margin: '15px'
  }
  const lists = [
    { name: 'tasinh', roll: '01'},
    { name: 'shuaib', roll: '02'},
    { name: 'marufh', roll: '03'}
  ]
  return (
    <div className="App">
      <header className="App-header">
          {
            lists.map(list => <dir style={style}><h1>{list.name}</h1> <h3>{list.roll}</h3></dir> )
          }
        <Book></Book>
      </header>
    </div>
  );
  function Book(){
    return <h2>This is a Library</h2>
  }
}

export default App;
