import { Routes, Route } from "react-router-dom";
import Root from "./routes/root/root";
import One from "./routes/one/one";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/one" />
      </Route>
    </Routes>
  );
}
