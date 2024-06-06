import projectClock from './assets/image/ProjectClock.png'
import projectFood from './assets/image/ProjectFood.png'
import githubPhoto from './assets/image/github.svg'
import linkPhoto from './assets/image/link.png'
import projectPizza from './assets/image/projectPizza.png'
import style from './style/projects.module.scss'
const Projects = () => {
	const mas = [
		{
			photo: projectPizza,
			name: 'Pizza',
			description:
				'Pizza — це сучасний веб-додаток для замовлення піци.Користувачі можуть переглядати різноманітні види піци, додавати обрані варіанти до кошика, налаштовувати кількість та розмір піци.',
			TechStack: 'HTML , JavaScript, SASS, React',
			linkGithub: 'https://github.com/PavelStadnuk/React_Pizza',
			linkS: 'https://pavelstadnuk.github.io/React_Pizza/',
		},
		{
			photo: projectFood,
			name: 'Online-store_Food_delivery',
			description:
				'На сайті ви можете обрати будь-яку страву для зручнішого пошуку реалізлвано сортування по категоріям  при натисканні на страву ви можете дізнатися її склад також реалізовано оформлення замовлення',
			TechStack: 'HTML , JavaScript, SASS, React',
			linkGithub: 'https://github.com/PavelStadnuk/React_Pizza',
			linkS: 'https://pavelstadnuk.github.io/Online-store_Food_delivery/',
		},
		{
			photo: projectClock,
			name: 'Online_Store_Of_Clocks',
			description:
				'це інтернет-магазин, спеціалізований на продажі годиників. Користувачі можуть переглядати асортимент товарів , додавати їх у кошик також реалізовано пошук сортування та фільтрація товару.',
			TechStack: 'HTML , JavaScript, SASS, React',
			linkGithub: 'https://github.com/PavelStadnuk/Online_Store_Of_Clocks',
			linkS: 'https://pavelstadnuk.github.io/Online_Store_Of_Clocks/',
		},
	]
	return (
		<div className={style.projects} id='Projects'>
			<h2>Projects</h2>
			<p>Things I’ve built so far</p>
			<div className={style.projectsWrapper}>
				{mas.map((element, index) => {
					return (
						<div className={style.project} key={index}>
							<div className={style.photoWrapper}>
								<img src={element.photo} />
							</div>
							<div className={style.descriptionWrapper}>
								<h3>{element.name}</h3>
								<p>{element.description}</p>
								<div className={style.linksWrapper}>
									<a href={element.linkS} className={style.links}>
										<img src={linkPhoto} />
										<p>Live Preview</p>
									</a>
									<a href={element.linkGithub} className={style.links}>
										<img src={githubPhoto} />
										<p>View Code</p>
									</a>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Projects
