import React from 'react'
import Card from '../Card'
import './style.scss'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

class Cards extends React.Component {
  render() {
    const Projects = [
      {
        img: project2,
        title: 'Singing Competition',
        description: 'I like singing and thats amazing',
        url:'https://www.instagram.com/tv/CPXNOaklq1o/?utm_medium=copy_link'
      },
      {
        img: project3,
        title: 'Teachers Activity',
        description: "My lovely friends is all about children",
        url:'https://www.instagram.com/sekolahalam.ugm/'
      }

    ]

    return (

      <div className='portfolioWrapper'id='Cards'>
        <img className='portfolioTitle' src='../assets/portfolio.png' />
        <div className='cardWrapper'>

          {Projects.map((project, key) => {
            return (
              <Card key={key} project={project} />
            )
          })}
        </div>
      </div>

    )
  }
}
export default Cards

