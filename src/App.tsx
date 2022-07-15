import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Slider />
    </div>
  );
}