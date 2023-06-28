import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function Prompt() {
  const [prompt, setPrompt] = useState('');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGpt = (prompt: string, url: string) => {
    setLoading(true);
    axios.get('http://localhost:4000/api/prompt', {
      params: {
        prompt: prompt,
        url: url
      }
    }).then((res) => {
      setLoading(false);
      setBody(res.data);
    });
  }
  
  return (
    <Container className='url-input'>
      <Form>
        <InputGroup>
          <InputGroup.Text>Gpt prompt</InputGroup.Text>
          <Form.Control type='text' onChange={e => setPrompt(e.target.value)} />
          <InputGroup.Text>Url</InputGroup.Text>
          <Form.Control type='text' onChange={e => setUrl(e.target.value)} />
          <Button id='button-addon' onClick={() => {handleGpt(prompt, url)}}>Go</Button>
        </InputGroup>
      </Form>
      <hr />
      <p>{loading && 'Loading...'}</p>
      <p>{body}</p>
    </Container>
  );
}
