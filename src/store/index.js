import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from 'MiniProjects/TodoList/todoListSlice'
const rootReducer = {
  todolist: todoListSlice
}

export default configureStore({
  reducer: rootReducer
})