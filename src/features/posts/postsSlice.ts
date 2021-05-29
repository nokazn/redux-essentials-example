import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export const REACTION_EMOJI = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤',
  rocket: '🚀',
  eyes: '👀',
} as const;

export const initialReactions: Record<ReactionKeys, number> = {
  thumbsUp: 0,
  hooray: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
} as const;

export type ReactionKeys = keyof typeof REACTION_EMOJI;
export type ReactionEmojis = typeof REACTION_EMOJI[ReactionKeys];
type Reactions = Record<ReactionKeys, number>;

export interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  reactions: Reactions;
}

interface AddedPost extends Pick<Post, 'title' | 'content' | 'userId'> {}
interface UpdatedPost extends Pick<Post, 'id' | 'title' | 'content'> {}
interface AddedReaction {
  postId: Post['id'];
  reaction: ReactionKeys;
}

const initialState: Post[] = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    userId: '1',
    date: new Date(2021, 4, 25).toISOString(),
    reactions: initialReactions,
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'More text',
    userId: '2',
    date: new Date(2021, 4, 27).toISOString(),
    reactions: initialReactions,
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
      prepare(payload: AddedPost) {
        return {
          payload: {
            ...payload,
            date: new Date().toISOString(),
            id: nanoid(),
            reactions: initialReactions,
          },
        };
      },
    },
    postUpdated(state, action: PayloadAction<UpdatedPost>) {
      const { id, title, content } = action.payload;
      const post = state.find((p) => p.id === id);
      if (post != null) {
        post.title = title;
        post.content = content;
      }
    },
    reactionAdded(state, action: PayloadAction<AddedReaction>) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost != null) {
        existingPost.reactions[reaction] += 1;
      }
    },
  },
});

// actions
export const { postAdded, postUpdated, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
