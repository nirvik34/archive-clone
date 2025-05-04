import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ArchiveGrid from "./components/ArchiveGrid";
import Navbar from './components/Navbar';
import AboutPage from './pages/About'; // Assuming the About page component is named AboutPage
import BlogPage from './pages/BlogPage'; // Similarly for other pages
import ContactPage from './pages/ContactPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/search" element={<SearchResults />} />
      <Route path ="/grid" element ={<ArchiveGrid />}  />
      <Route path="/" element={<Home />} /> {/* Home page component */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
