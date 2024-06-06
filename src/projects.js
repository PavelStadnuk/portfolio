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
			name: 'Project Tile goes here',
			description:
				'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
			TechStack: 'HTML , JavaScript, SASS, React',
			linkGithub: 'https://github.com/PavelStadnuk/React_Pizza',
			linkS: 'https://pavelstadnuk.github.io/React_Pizza/',
		},
		{
			photo: projectFood,
			name: 'Project Tile goes here',
			description:
				'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
			TechStack: 'HTML , JavaScript, SASS, React',
			linkGithub: 'https://github.com/PavelStadnuk/React_Pizza',
			linkS: 'https://pavelstadnuk.github.io/Online-store_Food_delivery/',
		},
		{
			photo: projectClock,
			name: 'Project Tile goes here',
			description:
				'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
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
