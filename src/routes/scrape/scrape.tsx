import axios from 'axios';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addSummary, selectSummaries } from './summariesSlice';
import SummaryCard from '../../components/SummaryCard';
import Container from 'react-bootstrap/Container';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function Scrape() {
  const summaries = useAppSelector(selectSummaries);
  const dispatch = useAppDispatch();

  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScrape = (url: string) => {
    setLoading(true);

    axios.get('http://localhost:4000/api/scrape', {
      params: { url: url }
    }).then(res => {
      setLoading(false);
      if (res.status === 200) {
        dispatch(addSummary({
          summary: res.data,
          url: url
        }));
      }
      else console.log(res);
    });
  }

  const renderSummaries = () => {
    return [...summaries].reverse().map((value) => <SummaryCard summary={value} />);
  }

  return (
    <Container className='url-input'>
      <Form>
        <InputGroup>
          <InputGroup.Text>Url</InputGroup.Text>
          <Form.Control type='text' onChange={e => setUrl(e.target.value)} />
          <Button id='button-addon' onClick={() => {handleScrape(url)}}>scrape</Button>
        </InputGroup>
      </Form>
      <hr />
      <p>{loading && 'Loading...'}</p>
      {renderSummaries()}
    </Container>
  );
}
