import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface isSidebarOpenStateProps {
  isSidebarOpen: boolean
}

const initialState: isSidebarOpenStateProps = {
  isSidebarOpen: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false
    }
  },
  extraReducers() {}
})

export const { openSidebar, closeSidebar } = sidebarSlice.actions
export const selectIsSidebarOpen = (state: RootState) =>
  state.sidebar.isSidebarOpen
export default sidebarSlice.reducer
