"use strict";
exports.__esModule = true;
var blog_1 = require("../Entity/blog");
var listBlog;
// Fetch data blog
function initListBlog() {
    var i = 0;
    for (;;) {
        i++;
        if (i > 10)
            break;
        listBlog.push(new blog_1.Blog("Title " + i, "Short Description " + i, "Description " + i));
    }

    disPlay();
}
// view data
function disPlay() {
    listBlog.forEach(function (blog) {
        console.log("Id : " + blog.Id);
        console.log("Title : " + blog.Title);
        console.log("Short Description : " + blog.Short_Description);
        console.log("Description : " + blog.Description);
    });
}
// get count list blog
function getCountBlog() {
    return blog_1.Blog.countBlog;
}
