import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { ButtonGroup, Button, Spinner, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-25&sortBy=publishedAt&apiKey=b093438169e44148aa7051053a7a930e')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }
    </div>
  );
}

export default App;
