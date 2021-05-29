import 'react-redux';
import type { RootState } from '../app/store';

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
