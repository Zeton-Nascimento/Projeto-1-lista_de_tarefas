import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return { payload: { id: nanoid(), text, completed: false } };
      }
    },
    toggleTask(state, action) {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    editTask(state, action) {
      const { id, text } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) task.text = text;
    },
    deleteTask(state, action) {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTask, toggleTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;