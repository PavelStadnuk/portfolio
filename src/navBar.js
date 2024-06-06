import style from './style/navbar.module.scss'
const Navbar = () => {
	const links = [
		'Home',
		'About',
		'Tech Stack',
		'Projects',
		'Contact',
		'0685333529',
	]
	return (
		<nav className={style.navBar} id='Home'>
			<div className={style.links}>
				{links.map((link, index) => {
					return (
						<a href={'#' + link} key={index}>
							{link}
						</a>
					)
				})}
			</div>
		</nav>
	)
}

export default Navbar
