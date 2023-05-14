import { atom } from 'recoil';

export interface Lecture {
  id: number;
  category: string;
  name: string;
  description: string;
}

const MyLecutresState = atom<Lecture[]>({
  key: 'MyLectures',
  default: [],
});

const CategoryState = atom<string>({
  key: 'Category',
  default: '',
});

const SearchState = atom<string>({
  key: 'Search',
  default: '',
});

export { MyLecutresState, CategoryState, SearchState };
