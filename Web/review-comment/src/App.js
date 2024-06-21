import './App.css';
import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';
import ReviewAIView from './components/ReviewAIView';
import AboutUsView from './components/AboutUsView';
import AppFooter from './components/AppFooter';
import { 
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppHeader/>
      <AppNavbar/>
      <Routes>
        <Route path="/review-ai" element={<ReviewAIView />} />
        <Route path="/about-us" element={<AboutUsView />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  );
}

export default App;
