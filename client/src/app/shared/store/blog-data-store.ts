import {BlogModel} from "../model/Blog.model";

export var blogDataStore: BlogModel[] = [
  {
    id: 1,
    title: "title1",
    description: "description1",
    content:{mainTitle: "main title 1", mainContent: "main <b>content 1</b>", subContent: "sub content 1 `markdown`"},
    image: "https://png.pngtree.com/background/20230411/original/pngtree-natural-landscape-snow-mountain-background-picture-image_2390197.jpg",
    tags: "tags1",
    created_at: "created_at1",
    updated_at: "updated_at1",
    author: "author1"
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    content:{mainTitle: "main title 2", mainContent: "main content 2", subContent: "sub content 2 `markdown`"},
    image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    tags: "tags2",
    created_at: "created_at2",
    updated_at: "updated_at2",
    author: "author2"
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    content:{mainTitle: "main title 3", mainContent: "main content 3", subContent: "sub content 3 `markdown`"},
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-8-best-free-mountain-background-images-4k-wallpapers-image_2670051.jpg",
    tags: "tags3",
    created_at: "created_at3",
    updated_at: "updated_at3",
    author: "author3"
  },
  {
    id: 4,
    title: "title4",
    description: "description4",
    content:{mainTitle: "main title 4", mainContent: "main content 4", subContent: "sub content 4 `markdown`"},
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-landscape-wallpaper-teton-mountains-image_2696564.jpg",
    tags: "tags4",
    created_at: "created_at4",
    updated_at: "updated_at4",
    author: "author4"
  },
  {
    id: 5,
    title: "title5",
    description: "description5",
    content:{mainTitle: "main title 5", mainContent: "main content 5", subContent: "sub content 5 `markdown`"},
    image: "https://png.pngtree.com/thumb_back/fh260/background/20230607/pngtree-hd-wallpaper-forest-scenery-mountains-mountain-wallpaper-image_2952455.jpg",
    tags: "tags5",
    created_at: "created_at5",
    updated_at: "updated_at5",
    author: "author5"
  }
]
