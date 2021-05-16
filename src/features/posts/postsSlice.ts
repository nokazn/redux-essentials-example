import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
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
  reducers: {
    postAdded(state, action: PayloadAction<Omit<Post, 'id'>>) {
      state.push({
        ...action.payload,
        id: nanoid(),
      });
    },
  },
});

// selector
export const selectPosts = (state: RootState) => state.posts;
export const selectPost = (postId: string | undefined) => (state: RootState) => {
  return postId != null ? state.posts.find((post) => post.id === postId) : undefined;
};

// actions
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
