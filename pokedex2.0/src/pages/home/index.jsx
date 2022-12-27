import { CardHome, ContainerHome, ContainerLogo } from "./style";
import { ButtonStart } from "../../assets/button/buttonStart";

function Home() {
    return (
      <ContainerHome>
        <CardHome>
          <ContainerLogo src="../../public/logoPokemon.png" alt="Pokemon" padding='1rem 1rem 0'/>
          <ContainerLogo src="../../public/logoPokedex.png" alt="Pokemon" width='50%' />
          <ButtonStart name='ENTRA'/>
        </CardHome>
      </ContainerHome>
    )
  }
  
  export default Home