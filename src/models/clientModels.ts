export interface ArticleCard {
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
