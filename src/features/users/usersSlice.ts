import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface User {
  id: string;
  name: string;
}

const initialState: User[] = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

// selector
export const selectUsers = (state: RootState) => state.users;
export const selectUser = (userId: string | undefined) => (state: RootState) => {
  return userId != null ? state.users.find((user) => user.id === userId) : undefined;
};

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
