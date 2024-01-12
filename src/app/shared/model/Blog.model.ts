export interface BlogModel {
  id: number;
  title: string;
  description: string;
  content: {
    mainTitle: string;
    mainContent: string;
    subTitle: string[];
    subContent: string[];
  };
  image: string;
  tags: string;
  created_at: string;
  updated_at: string;
  author: string;
}
