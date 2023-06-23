import { Routes, Route } from "react-router-dom";
import Root from "./routes/root/root";
import Scrape from "./routes/scrape/scrape";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Root />} />
    </Routes>
  );
}
