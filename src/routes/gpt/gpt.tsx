import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function Gpt() {
  const [input, setInput] = useState('');
  const [body, setBody] = useState('');

  const handleGpt = (input: string) => {
    axios.get('http://localhost:4000/api/gpt', {
      params: { input: input }
    }).then(res => setBody(res.data));
  }
  
  return (
    <Container className='url-input'>
      <Form>
        <InputGroup>
          <InputGroup.Text>Gpt input</InputGroup.Text>
          <Form.Control type='text' onChange={e => setInput(e.target.value)} />
          <Button id='button-addon' onClick={() => {handleGpt(input)}}>Go</Button>
        </InputGroup>
      </Form>
      <hr />
      <p>{body}</p>
    </Container>
  );
}
