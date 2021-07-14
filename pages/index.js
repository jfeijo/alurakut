import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSideBar(props) {
  return(
    <Box className="profileArea" style={{ gridArea: 'profileArea'}}>
    <img src={`http://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}/>
  </Box>
  )
}

export default function Home() {
  const githubUser = 'jfeijo'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  return(
    <div>
  <AlurakutMenu />
    <MainGrid>
        <div>
          <ProfileSideBar githubUser={githubUser}/>
        </div>
        <div>
          <Box className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
            <h1 className="title">Bem-vindo(a)</h1>
            <OrkutNostalgicIconSet/>
            
          </Box>
        </div>
          <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>
          
          <ul>
            {pessoasFavoritas.map((itemAtual)=>{
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`}/>
                    <span>{itemAtual}</span>
                  </a>
                </li>
                )
            })}
          </ul>
          </ProfileRelationsBoxWrapper>
          </div>
    </MainGrid>
    </div>
  )
};
