import { ImagemHero, LogoImage, Titulo1 } from './stylesHero'
import imagemdeFundo from '../../../assets/images/fundo_cabecalho.png'
import efoodLogo from '../../../assets/images/logo.png'

const HeroCabecalho = () => (
  <ImagemHero style={{ backgroundImage: `url(${imagemdeFundo})` }}>
    <LogoImage src={efoodLogo} alt="efood" />
    <Titulo1>Viva experiências gastronômicas no conforto da sua casa</Titulo1>
  </ImagemHero>
)

export default HeroCabecalho
