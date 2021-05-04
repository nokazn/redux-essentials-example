import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Post {
  id: string;
  title: string;
  content: string;
}

const initialState: Post[] = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'More text',
  },
];

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
});

export const selectPosts = (state: RootState) => state.posts;

export default postSlice.reducer;
