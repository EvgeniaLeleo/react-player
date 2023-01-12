import { useAppSelector } from '../../hooks/hook'
import { colorToSecondary } from '../../utils/colorUtils'

import style from './style.module.css'

export const Footer = () => {
  const textColor = useAppSelector((state) => state.colorTheme.textColor)
  const textColorSecondary = colorToSecondary(textColor)

  return (
    <footer className={style.footer}>
      <div className={style.footerInfo}>
        <p className={style.copyright} style={{ color: textColorSecondary }}>
          2022 ©{' '}
          <a
            className={style.copyrightLink}
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
  )
}
