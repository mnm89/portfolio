import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./templates/Header";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import { Layout } from "./templates/Layout";

function App() {
  const location = useLocation();
  return (
    <Layout>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Profile />} index />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
