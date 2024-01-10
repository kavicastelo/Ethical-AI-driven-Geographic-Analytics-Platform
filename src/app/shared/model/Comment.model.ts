export interface CommentModel {
  id: number;
  blogId: number;
  name: string;
  email: string;
  profile: string;
  date: Date;
  comment: string;
  reply: any;
}
