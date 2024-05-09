import { RootState } from '../store'

export const selectShows = (state: RootState) => state?.shows?.shows || []
