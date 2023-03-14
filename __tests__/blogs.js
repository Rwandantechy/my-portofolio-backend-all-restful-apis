/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require("supertest");
const db = require("../models/blogs");
const app = require("../app");

describe("Testing my blogs RESTFUL API", () => {
  let agent;

  test("should create a new blog", async () => {
    const blog = {
      blogTitle: "The blog Title is supposed to be here always",
      blogAuthor: "Niyonzima, Just Exammple",
      blogBody: "the entire content of the blog should come here",
      blogThumbnailImageUrl: "the url for the image should be put here",
    };
    const res = await request(app).post("/api/blogs/create").send(blog);
    expect(res.statusCode).toEqual(200);
    expect(res.body.blogTitle).toEqual(blog.blogTitle);
    expect(res.body.blogAuthor).toEqual(blog.blogAuthor);
    expect(res.body.blogBody).toEqual(blog.blogBody);
    expect(res.body.blogThumbnailImageUrl).toEqual(blog.blogThumbnailImageUrl);

    agent = res.body;
  });

  test("Should Display all ccreated blogs", async () => {
    const res = await request(app).get("/api/blogs");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  test("Should retrieve a blog with its ID", async () => {
    const res = await request(app).get(`/api/blogS/${agent._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.blogTitle).toEqual(agent.blogTitle);
    expect(res.body.blogBody).toEqual(agent.blogBody);
    expect(res.body.blogAuthor).toEqual(agent.blogAuthor);
    expect(res.body.blogThumbnailImageUrl).toEqual(agent.blogThumbnailImageUrl);
  });
});
