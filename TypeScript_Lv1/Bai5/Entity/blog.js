"use strict";
exports.__esModule = true;
exports.Blog = void 0;
var Blog = /** @class */ (function () {
    function Blog(title, short_description, description) {
        this.Title = title;
        this.Short_Description = short_description;
        this.Description = description;
        Blog.countBlog++;
        this.Id = Blog.countBlog;
    }
    Blog.getCountBlog = function () {
        return Blog.countBlog;
    };
    Blog.countBlog = 0;
    return Blog;
}());
exports.Blog = Blog;
