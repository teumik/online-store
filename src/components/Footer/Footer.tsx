import './footer.scss';
import RssSvg from './RssSvg/RssSvg';
import GithubSvg from './GithubSvg/GithubSvg';
import { FooterType } from './types/footer.interface';

function Footer({ date }: FooterType) {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__items">
          <ul className="footer__list git">
            <li className="footer__items git__tems">
              <a className="footer__links" href="https://github.com/teumik" target="_blank" rel="noreferrer">
                <GithubSvg />
              </a>
            </li>
            <li className="footer__items git__tems">
              <a className="footer__links" href="https://github.com/AndreyVeres" target="_blank" rel="noreferrer">
                <GithubSvg />
              </a>
            </li>
          </ul>
        </li>
        <li className="footer__items">{`${date} ©DreamTeam`}</li>
        <li className="footer__items">
          <a className="footer__links" href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <div className="wrapper_adjust">
              <RssSvg />
            </div>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
