interface MusicList {
  __typename: string;
  meta: Meta;
  data: Music[];
}

interface TransactionList {
  __typename: string;
  meta: Meta;
  data: Transaction[];
}

interface Transaction {
  id: number;
  user: User;
  music: Music;
}

interface Music {
  __typename: string;
  id: number;
  name: string;
  content: string;
  hash: string;
  cover: string;
  price: number;
  limit: number;
  play: Play;
  album: Album;
}

interface Play {
  __typename: string;
  count: number;
}

interface Album {
  __typename: string;
  id: number;
  name: string;
  cover: string;
  artist: mArtist;
  createdAt?: string;
}

interface mArtist {
  __typename: string;
  user: User;
  description: string;
  name: string;
}

interface User {
  __typename: string;
  wallet: string;
}

interface Artist {
  id: number;
  name: string;
  avatar: string;
  musics: Music[];
  createdAt?: string;
  musicCount?: number;
}

interface ListAlbum {
  meta: Meta;
  data: Album[];
}

interface Meta {
  totalItems: number;
  limit: number;
  page: number;
  totalPages: string;
}

interface User extends BaseInfo {
  userName: string;
  password: string;
  email: string;
  profileImage?: string;
  birthDate: number;
  playLists: PlayList[];
  recent: Music[];
  favorite: Music[];
}

interface PlayList extends BaseInfo {
  title: string;
  description?: string;
  color: string;
  avatar?: string;
  musics: Music[];
}

interface SidebarLinkInfo {
  id: number;
  title: string;
  links: SidebarLink[];
}

interface SidebarLink {
  id: number;
  title: string;
  href: string;
  icon: (typeof iconsName)[number];
  child: boolean;
}

interface AuthLocalStorage {
  set_at: number;
  token: string;
  id: string;
}

interface AppLocalStorage {
  currentMusic: Music;
  isPlaying: boolean;
  playList: Music[];
  playListId: string;
  volume: number;
  currentMusicTime: number;
  repeatType: RepeatType;
  shuffleIndex: number[];
}

type PasswordStrength =
  | "very weak"
  | "weak"
  | "moderate"
  | "strong"
  | "powerfull";

type ButtonType =
  | "primary"
  | "primary-outline"
  | "primary-flat"
  | "secondary"
  | "secondary-outline"
  | "secondary-flat"
  | "danger";

interface Window {
  ethereum: any;
}
