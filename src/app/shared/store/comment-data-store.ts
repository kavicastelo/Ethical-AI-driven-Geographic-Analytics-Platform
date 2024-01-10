import {CommentModel} from "../model/Comment.model";

export var commentDataStore: CommentModel[] = [
  {
    id: 1,
    blogId: 1,
    name: "John",
    email: "a@a.com",
    profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
    date: new Date(),
    comment: "This is a comment",
    reply: null,
    like: 0
  },
  {
    id: 2,
    blogId: 1,
    name: "John",
    email: "a@a.com",
    profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
    date: new Date(),
    comment: "This is a comment",
    reply: [{
      name: "John",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment"
    }, {
      name: "Wick",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment 2"
    }],
    like: 1
  },
  {
    id: 3,
    blogId: 1,
    name: "John",
    email: "a@a.com",
    profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
    date: new Date(),
    comment: "This is a comment",
    reply: [{
      name: "John",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment"
    }, {
      name: "Wick",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment 2"
    }, {
      name: "John",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment 3"
    }],
    like: 2
  },
  {
    id: 4,
    blogId: 2,
    name: "John",
    email: "a@a.com",
    profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
    date: new Date(),
    comment: "This is a comment",
    reply: [{
      name: "John",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment"
    }, {
      name: "Wick",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment 2"
    }, {
      name: "John",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment 3"
    }, {
      name: "John",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment 4"
    }],
    like: 3
  },
  {
    id: 5,
    blogId: 2,
    name: "John",
    email: "a@a.com",
    profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
    date: new Date(),
    comment: "This is a comment",
    reply: [{
      name: "John",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment"
    }, {
      name: "Wick",
      email: "a@a.com",
      profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
      date: new Date(),
      comment: "This is a reply comment 2"
    }],
    like: 4
  },
  {
    id: 6,
    blogId: 3,
    name: "John",
    email: "a@a.com",
    profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
    date: new Date(),
    comment: "This is a comment",
    reply: null,
    like: 0
  },
  {
    id: 7,
    blogId: 4,
    name: "John",
    email: "a@a.com",
    profile: "https://cdn1.iconfinder.com/data/icons/heroicons-solid/20/user-circle-512.png",
    date: new Date(),
    comment: "This is a comment",
    reply: null,
    like: 0
  },
]
