import { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import { useAppSelector, useAppDispatch } from '../../hook';
import { closeModal } from '../../store/modalSlice';
import { logout } from '../../store/auth/auth';
import { useNavigate } from 'react-router-dom';
import { COLOR, BGCOLOR, COLOR_EXTRADARK, DEFAULT_LANG } from '../../constants';
import {
  changeTextColor,
  changeBgColor,
  changeDecorativeColor,
} from '../../store/colorThemeSlice';
import {
  updateCheckedArtists,
  updateCheckedYears,
  updateCheckedGenres,
  updateFilteredTracks,
  updateFilteredDanceTracks,
  updateFilteredRandomTracks,
  updateFilteredFavouritesTracks,
  updateSearchedTracks,
  updateSearchedTracksDance,
  updateSearchedTracksRandom,
  updateSearchedTracksFavourites,
} from '../../store/filteredItemsSlice';
import { changeLanguage } from '../../store/languageSlice';
import { updateSearchQuery } from '../../store/sortingSettingsSlice';
import { uploadAllTracks } from '../../store/trackSlice';
import { TSong } from '../../types';

export const AlertDialog: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  const navigate = useNavigate();
  const allTracks: TSong[] = useAppSelector((state) => state.tracks.allTracks);
  const allTracksDance: TSong[] = useAppSelector(
    (state) => state.tracks.danceTracks,
  );
  const allTracksRandom = useAppSelector((state) => state.tracks.randomTracks);

  const allTracksFavourites = useAppSelector(
    (state) => state.tracks.favourites,
  );

  const onClickLogout = () => {
    localStorage.clear();

    dispatch(changeTextColor(COLOR));
    dispatch(changeBgColor(BGCOLOR));
    dispatch(changeDecorativeColor(COLOR_EXTRADARK));
    dispatch(changeLanguage(DEFAULT_LANG));

    dispatch(updateCheckedArtists([]));
    dispatch(updateCheckedYears([]));
    dispatch(updateCheckedGenres([]));

    dispatch(updateFilteredTracks([]));
    dispatch(updateFilteredDanceTracks([]));
    dispatch(updateFilteredRandomTracks([]));
    dispatch(updateFilteredFavouritesTracks([]));

    dispatch(updateSearchQuery(''));
    dispatch(uploadAllTracks([]));
    dispatch(updateSearchedTracks(allTracks));
    dispatch(updateSearchedTracksDance(allTracksDance));
    dispatch(updateSearchedTracksRandom(allTracksRandom));
    dispatch(updateSearchedTracksFavourites(allTracksFavourites));
    dispatch(logout());
    dispatch(closeModal());
    navigate('/');
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Вы действительно хотите выйти?'}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={onClickLogout} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
