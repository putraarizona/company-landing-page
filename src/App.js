import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<header>
				<Navbar />
				<Hero />
			</header>
			<main>
				<Values />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
