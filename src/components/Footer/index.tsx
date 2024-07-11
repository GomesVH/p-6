import { EfooImg, FooterBackground, Logoul, TextoFinal } from './stylesFooter'
import efoodLogo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/Twitter.png'

const Footer = () => (
  <FooterBackground>
    <EfooImg src={efoodLogo} alt="Efood" />
    <Logoul>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
    </Logoul>
    <TextoFinal>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </TextoFinal>
  </FooterBackground>
)

export default Footer
