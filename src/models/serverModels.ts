export interface Notice {
  id: number;
  title: string;
  date: string;
}

export interface ReadingHistory {
  id: number;
  title: string;
  date: string;
}

export interface Article {
  id: number;
  author: string;
  title: string;
  createdAt: string;
  content: string;
  avatarImagePath?: string;
  previewImagePath?: string;
  replyCount?: number;
  clapCount?: number;
}
