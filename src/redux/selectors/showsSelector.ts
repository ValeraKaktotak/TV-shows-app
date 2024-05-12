import { createSelector } from 'reselect'
import { SHOWS_TYPES } from '../../constant/commonConstans'
import { RootState } from '../store'

export const selectShows = (state: RootState) => state?.shows?.shows || []

const sortShowsByType = (type: SHOWS_TYPES) => {
  return createSelector([selectShows], (shows: ShowsData_Interface[]) => {
    if (type === SHOWS_TYPES.HIGH_RATED_SHOWS) {
      console.log('in HIGH RATED SHOWS')
      return [...shows].sort(
        (a, b) => (b.rating?.average || 0) - (a.rating?.average || 0)
      )
    } else if (type === SHOWS_TYPES.NEW_SHOWS) {
      console.log('in NEW SHOWS')
      return [...shows].sort(
        (a, b) =>
          new Date(b.premiered).getTime() - new Date(a.premiered).getTime()
      )
    }
    return shows
  })
}

export const selectSortedHighRatedShows = sortShowsByType(
  SHOWS_TYPES.HIGH_RATED_SHOWS
)
export const selectSortedNewShows = sortShowsByType(SHOWS_TYPES.NEW_SHOWS)
