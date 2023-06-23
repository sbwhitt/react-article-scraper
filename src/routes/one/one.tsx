import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, FormLabel } from 'react-bootstrap';

export default function One() {
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  const handleScrape = (url: string) => {
    axios.post('https://localhost:4000/api/scrape', {
      url: url
    }).then(res => setBody(res.data));
  }
  
  return (
    <Container>
      <FormLabel>Input URL</FormLabel>
      <input onChange={e => setUrl(e.target.value)} />
      <Button onClick={() => {handleScrape(url)}}>scrape</Button>
    </Container>
  );
}
