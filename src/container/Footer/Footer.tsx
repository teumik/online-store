import FooterView from '../../components/Footer/Footer';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <FooterView date={date} />
  );
}

export default Footer;
