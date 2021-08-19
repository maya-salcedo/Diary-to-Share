import HomeScreen from './screens/HomeScreen';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './elements/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header></Header>
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
