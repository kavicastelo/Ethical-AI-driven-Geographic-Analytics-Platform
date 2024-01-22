export interface CommentModel {
  id: any;
  blogId: any;
  name: any;
  email: any;
  profile: any;
  date: any;
  comment: any;
  reply: {
    id: any;
    commentId: any;
    name: any;
    email: any;
    profile: any;
    date: any;
    replyComment: any;
  }[];
  like: any;
}
