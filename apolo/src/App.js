import { useState } from 'react';
import Banner from './components/Banner/';
import Form from './components/Form';
import Group from './components/Group';
import Footer from './components/Footer';

function App() {

  const grupos = [
    {
      nome: 'Inimigos',
      primaryColor: '#816271',
      secondaryColor: '#816271bc',
    },
    {
      nome: 'Personagens',
      primaryColor: '#4e495f',
      secondaryColor: '#4e495fbc',
    },
    {
      nome: 'Items',
      primaryColor: '#f6d6bd',
      secondaryColor: '#f6d6bdbc',
    },
    {
      nome: 'Construções',
      primaryColor: '#08141e',
      secondaryColor: '#08141ebc',
    },
    {
      nome: 'Extras',
      primaryColor: '#0f2a3f',
      secondaryColor: '#0f2a3fbc',
    },
  ]

  const [assets, setAssets] = useState([])

  const newAsset = (asset) => {
    setAssets([...assets, asset])
  }

  return (
    <div className="App">
      <Banner />
      <Form grupos={grupos.map(grupo => grupo.nome)} registered={asset => newAsset(asset)}/>
      {grupos.map(grupo => 
        <Group 
          key={grupo.nome} 
          nome={grupo.nome} 
          primaryColor={grupo.primaryColor} 
          secondaryColor={grupo.secondaryColor}
          assets={assets.filter(asset => asset.grupo === grupo.nome)}
        />)}
      <Footer />
    </div>
  );
}

export default App;
