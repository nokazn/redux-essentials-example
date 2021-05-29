import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const initialState: Post[] = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    userId: '1',
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'More text',
    userId: '2',
  },
];

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(payload: Omit<Post, 'id'>) {
        return {
          payload: {
            ...payload,
            id: nanoid(),
          },
        };
      },
    },
    postUpdated(state, action: PayloadAction<Post>) {
      const { id, title, content } = action.payload;
      const post = state.find((p) => p.id === id);
      if (post != null) {
        post.title = title;
        post.content = content;
      }
    },
  },
});

// actions
export const { postAdded, postUpdated } = postSlice.actions;

export default postSlice.reducer;
