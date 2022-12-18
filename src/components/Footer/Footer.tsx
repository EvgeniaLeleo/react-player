import { useAppSelector } from '../../hook';
import { colorToSecondary } from '../../utils/colorUtils';

import './Footer.css';

export const Footer = () => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const textColorSecondary = colorToSecondary(textColor);

  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="copyright" style={{ color: textColorSecondary }}>
          2022 ©{' '}
          <a
            className="copyright__link"
            href="https://github.com/EvgeniaLeleo"
            target="_blank"
            rel="noreferrer"
            style={{ color: textColorSecondary }}
          >
            EvgeniaLeleo
          </a>
        </p>
      </div>
    </footer>
  );
};
