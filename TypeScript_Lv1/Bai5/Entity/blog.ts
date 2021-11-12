class Blog {
  public Id: number;
  public Title: string;
  public Short_Description: string;
  public Description: string;

  static countBlog: number = 0;

  constructor(title: string, short_description: string, description: string) {
    this.Title = title;
    this.Short_Description = short_description;
    this.Description = description;
    Blog.countBlog++;
    this.Id = Blog.countBlog;
  }

  public static getCountBlog() {
    return Blog.countBlog;
  }
}

export { Blog };
