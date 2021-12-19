import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    tabs: [
      {
        id: 1,
        title: 'Dashboard',
        route: '/dashboard'
      }
    ],
    activeTabId: 1,
    isMessageboxOpened: true
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTabId = action.payload;
    },
    addTab: (state) => {
      const newTabId = new Date().getTime();
      state.tabs.push({
        id: newTabId,
        title: 'Dashboard',
        route: '/dashboard'
      });
      state.activeTabId = newTabId;
    },
    closeTab: (state, action) => {
      const tabIndex = state.tabs.findIndex(tab => tab.id === action.payload);
      state.tabs.splice(tabIndex, 1);
      state.activeTabId = state.tabs[Math.min(tabIndex, state.tabs.length - 1)].id;
    },

    // Toggle message box
    toggleMessageBox: (state, action) => {
      state.isMessageboxOpened = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveTab,
  addTab,
  closeTab,
  toggleMessageBox
} = commonSlice.actions;

export default commonSlice.reducer;