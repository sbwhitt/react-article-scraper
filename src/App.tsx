import { Routes, Route } from "react-router-dom";
import Root from "./routes/root/Root";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Root />} />
    </Routes>
  );
}
