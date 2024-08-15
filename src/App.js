import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PackageDetail from "./pages/PackageDetail";

function App() {

  return (
  <div className="app">
<Routes>

  <Route path="/" element={<HomePage   />} />
  <Route path="/packageDetail" element={<PackageDetail />}  />

</Routes>
  </div>
  );
}

export default App;
