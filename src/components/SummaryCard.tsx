import styles from './SummaryCard.module.css';
import { Card } from "react-bootstrap";
import { Summary } from "../routes/scrape/summariesSlice";

export default function SummaryCard(props: {summary: Summary}) {
  return (
    <a className={styles.link} target='_blank' href={props.summary.url}>
      <Card className={styles.card}>
        <p>{props.summary.url}</p>
        <p>{props.summary.summary}</p>
      </Card>
    </a>
  );
}