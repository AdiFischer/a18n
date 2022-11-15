import English from './lang/en.json'
import Spanish from './lang/es.json'
import './App.css';

const locale = navigator.language || 'en';

const lang = (locale==='es') ? Spanish : English;

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>{lang["app.header"]}</h1>
        <p>{lang["app.subhead"]}</p>
        <a>{lang["app.cta"]}</a>
      </header>
    </div>
  );
}

export default App;
