import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import SingleMovieDetailPage from "./pages/SingleMovieDetailPage";
import SearchedMoviePage from "./pages/SearchedMoviePage";
import Navbar from "./components/Navbar";
import ComingSoon from "./pages/ComingSoon";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<SingleMovieDetailPage />} />
        <Route path="/search" element={<SearchedMoviePage />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/privacy" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
