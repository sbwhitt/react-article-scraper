import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, ButtonGroup, FormLabel } from 'react-bootstrap';

export default function Scrape() {
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  const handleScrape = (url: string) => {
    axios.get('http://localhost:4000/api/scrape', {
      params: { url: url }
    }).then(res => setBody(res.data));
  }
  
  return (
    <Container>
      <ButtonGroup>
        <input className='url-input' onChange={e => setUrl(e.target.value)} />
        <Button onClick={() => {handleScrape(url)}}>scrape</Button>
      </ButtonGroup>
      <p>{body}</p>
    </Container>
  );
}
