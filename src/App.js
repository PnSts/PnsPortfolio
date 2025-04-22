import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";



function App() {
  return (
      <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/project" element={<ReservationsHome />} /> */}
          </Routes>
        </Layout>
      </>
  );
}

export default App;
