import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import { ModalProvider } from "./context/ModalContext";


function App() {
  return (
    <>
      
        <ModalProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/project" element={<ReservationsHome />} /> */}
            </Routes>
          </Layout>
        </ModalProvider>

    </>
  );
}

export default App;
