import { useState } from 'react'
import Banner from './components/Banner/Banner.jsx'
import FormCamp from './components/FormCamp'
import Teams from './components/Teams/index.jsx'

function App() {

  const times = [
    {
      nome: 'Programação',

      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2'
    },
    {
      nome: 'Devops',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      primaryColor: '#db6ebf',
      secondaryColor: '#fae9f5'
    },
    {
      nome: 'Mobile',
      primaryColor: '#ffba05',
      secondaryColor: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '#ff8a29',
      secondaryColor: '#ffeedf'
    },

  ]

  const [collaborators, setCollaborator] = useState([])

  const newCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborator([...collaborators, collaborator])
  }

  return (
    <div className='App'>
      <Banner />
      <FormCamp timeName={times.map(time => time.nome)} registeredCollaborator={collaborator => newCollaborator(collaborator)} />
      {times.map(time => <Teams
        key={time.nome}
        nome={time.nome}
        primaryColor={time.primaryColor}
        secondaryColor={time.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.time === time.nome)}
      />)}


    </div>

  )
}

export default App
