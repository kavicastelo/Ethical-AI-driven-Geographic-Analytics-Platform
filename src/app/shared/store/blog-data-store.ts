import {BlogModel} from "../model/Blog.model";

export var blogDataStore: BlogModel[] = [
  {
    id: 1,
    title: "title1",
    description: "description1",
    content: [{mainTitle: "main title 1"}, {subTitle: ["sub title 1", "sub title 2", "sub title 3"]}, {subContent: ["sub content 1", "sub content 2", "sub content 3"]}],
    image: "image1",
    tags: "tags1",
    created_at: "created_at1",
    updated_at: "updated_at1"
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    content: [{mainTitle: "main title 2"}, {subTitle: ["sub title 1", "sub title 2", "sub title 3"]}, {subContent: ["sub content 1", "sub content 2", "sub content 3"]}],
    image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    tags: "tags2",
    created_at: "created_at2",
    updated_at: "updated_at2"
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    content: [{mainTitle: "main title 3"}, {subTitle: ["sub title 1", "sub title 2", "sub title 3"]}, {subContent: ["sub content 1", "sub content 2", "sub content 3"]}],
    image: "image3",
    tags: "tags3",
    created_at: "created_at3",
    updated_at: "updated_at3"
  },
  {
    id: 4,
    title: "title4",
    description: "description4",
    content: [{mainTitle: "main title 4"}, {subTitle: ["sub title 1", "sub title 2", "sub title 3"]}, {subContent: ["sub content 1", "sub content 2", "sub content 3"]}],
    image: "image4",
    tags: "tags4",
    created_at: "created_at4",
    updated_at: "updated_at4"
  },
  {
    id: 5,
    title: "title5",
    description: "description5",
    content: [{mainTitle: "main title 5"}, {subTitle: ["sub title 1", "sub title 2", "sub title 3"]}, {subContent: ["sub content 1", "sub content 2", "sub content 3"]}],
    image: "image5",
    tags: "tags5",
    created_at: "created_at5",
    updated_at: "updated_at5"
  }
]
