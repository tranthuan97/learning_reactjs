import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'counter',
  initialState: {
    listItem: [],
    isLogin: false,
    accounts: [],
    isRegister: false,
    rememberLog: {
      isRemember: false,
      account: null
    },
  },
  reducers: {
    registerAction: (state, action) => {
      state.accounts.push(action.payload)
      state.isRegister = true;
    },
    loginAction: (state, action) => {
      state.isLogin = action.payload;
    },
    setRememberLogAction: (state, action) => {
      state.rememberLog = action.payload.rememberLog;
      state.isRegister = action.payload.isRegister;
    },
    addItemAction: (state, action) => {
      state.listItem = action.payload;
    },
    changeListItemsAction: (state, action) => {
      state.listItem = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { registerAction, loginAction, logoutAction, setRememberLogAction, addItemAction, changeListItemsAction } = todoListSlice.actions

export default todoListSlice.reducer