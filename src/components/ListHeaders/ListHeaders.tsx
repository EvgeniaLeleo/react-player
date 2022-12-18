import { cn } from '@bem-react/classname';
import { AccessTime } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

import { TEXT } from '../../constants';
import { useAppSelector } from '../../hook';
import { colorToSecondary } from '../../utils/colorUtils';

import './ListHeaders.css';

const cnListHeaders = cn('ListHeaders');

export const ListHeaders = () => {
  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const textColorSecondary = colorToSecondary(textColor);

  return (
    <div className={cnListHeaders()}>
      <span
        className={cnListHeaders('Track')}
        style={{ color: textColorSecondary }}
      >
        {TEXT.listHeader.track[lang]}
      </span>
      <span
        className={cnListHeaders('Singer')}
        style={{ color: textColorSecondary }}
      >
        {TEXT.listHeader.artist[lang]}
      </span>
      <span
        className={cnListHeaders('Album')}
        style={{ color: textColorSecondary }}
      >
        {TEXT.listHeader.album[lang]}
      </span>
      <SvgIcon fontSize="small" sx={{ my: 'auto', ml: 'auto' }}>
        <AccessTime />
      </SvgIcon>
    </div>
  );
};
