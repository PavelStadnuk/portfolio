import Footer from './footer'
import Me from './me'
import Navbar from './navBar'
import Projects from './projects'
import style from './style/app.module.scss'
import TechStack from './techstack'
function App() {
	return (
		<div className={style.app}>
			<Navbar />
			<Me />
			<TechStack />
			<Projects />
			<Footer />
		</div>
	)
}

export default App
