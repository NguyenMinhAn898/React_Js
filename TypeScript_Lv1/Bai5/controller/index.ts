import { Blog } from "../Entity/blog";
let listBlog: Blog[];
// Fetch data blog
function initListBlog() {
  let i: number = 0;
  for (;;) {
    i++;
    if (i > 10) break;
    listBlog.push(
      new Blog("Title " + i, "Short Description " + i, "Description " + i)
    );
  }
}

// view data
function disPlay() {
  listBlog.forEach((blog) => {
    console.log("Id : " + blog.Id);
    console.log("Title : " + blog.Title);
    console.log("Short Description : " + blog.Short_Description);
    console.log("Description : " + blog.Description);
  });
}

// get count list blog
function getCountBlog(): number {
  return Blog.countBlog;
}
