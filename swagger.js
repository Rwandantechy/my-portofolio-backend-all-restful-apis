const swaggerDefinition = {
  swagger: "2.0",
  info: {
    title: "MY PORTOFOLIO API",
    description: "API ENDPOINTS TESTING WITH SWAGGER.",
    version: "3.0.0",
  },
  host: "localhost:3000",
  basePath: "/api",
  schemes: ["http"],
  paths: {
    "/login": {
      post: {
        tags: ["USERS"],
        summary: "Login with email and password",
        description: "Allows user to login with tokens",
        produces: ["application/json"],
        parameters: [
          {
            name: "email",
            in: "formInput",
            description: "Email of the user",
            required: true,
            type: "string",
          },
          {
            name: "password",
            in: "formInput",
            description: "Password of the user",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/register": {
      post: {
        tags: ["USERS"],
        summary: "register with firstname,lastname,email and password",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "firstname",
            in: "formInput",
            description: "user's firstname",
            required: true,
            type: "string",
          },
          {
            name: "lastname",
            in: "formInput",
            description: "user's lastname",
            required: true,
            type: "string",
          },
          {
            name: "email",
            in: "formInput",
            description: "user's email",
            required: true,
            type: "string",
          },

          {
            name: "password",
            in: "formInput",
            description: "user's Password ",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/users": {
      get: {
        tags: ["USERS"],
        summary: "Get all registered users",
        description: "",
        produces: ["application/json"],
        parameters: [],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/users/{id}": {
      get: {
        tags: ["USERS"],
        summary: "Get a user by their id",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "user's id ",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },

    "/user/delete/{id}": {
      delete: {
        tags: ["USERS"],
        summary: "Delete user by ID",
        description: "Deletes the user with the given ID.",
        parameters: [
          {
            in: "path",
            name: "id",
            description: "ID of the user to be deleted",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          204: {
            description: "User deleted successfully",
          },
          404: {
            description: "User not found",
          },
        },
      },
    },
    "/blogs/create": {
      post: {
        tags: ["BLOGS"],
        summary: "Create a new blog post",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "blogTitle",
            in: "formInput",
            description: "Title of the article",
            required: true,
            type: "string",
          },
          {
            name: "blogAuthor",
            in: "formInput",
            description: "Title of the article",
            required: true,
            type: "string",
          },
          {
            name: "blogBody",
            in: "formInput",
            description: "Content of the article",
            required: true,
            type: "string",
          },
          {
            name: "blogThumbnailImageUrl",
            in: "formInput",
            description: "Image of the article",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/blogs": {
      get: {
        tags: ["BLOGS"],
        summary: "Get all articles",
        description: "",
        produces: ["application/json"],
        parameters: [],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/blogs/{id}": {
      get: {
        tags: ["BLOGS"],
        summary: "Get a blog post by id",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the blog post",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/blogs/update/{id}": {
      put: {
        tags: ["BLOGS"],
        summary: "Update the existed article",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the blog post",
            required: true,
            type: "string",
          },

          {
            name: "blogTitle",
            in: "formInput",
            description: "Title of the article",
            required: true,
            type: "string",
          },
          {
            name: "blogAuthor",
            in: "formInput",
            description: "Title of the article",
            required: true,
            type: "string",
          },
          {
            name: "blogBody",
            in: "formInput",
            description: "Content of the article",
            required: true,
            type: "string",
          },
          {
            name: "blogThumbnailImageUrl",
            in: "formInput",
            description: "Image of the article",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/blogs/delete/{id}": {
      delete: {
        tags: ["BLOGS"],
        summary: "Delete a blog post",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the blog post",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/comments/create": {
      post: {
        tags: ["COMMENTS"],
        summary: "Add a comment to a blog post",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "commentorName",
            in: "path",
            description: "the name of the person who commented",
            required: true,
            type: "string",
          },
          {
            name: "commentorEmail",
            in: "path",
            description: "the email of the person who commented",
            required: true,
            type: "string",
          },
          {
            name: "blog",
            in: "path",
            description: "the blog title on which the person who commented",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/comments/{id}": {
      delete: {
        tags: ["COMMENTS"],
        summary: "Delete a comment",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the that blog",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },      
    "/messages": {
      get: {
        tags: ["MESSAGES"],
        summary: "Get all messages from the clients",
        description: "",
        produces: ["application/json"],
        parameters: [],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/messages/create": {
      post: {
        tags: ["MESSAGES"],
        summary: "send a message",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "senderName",
            in: "path",
            description: "name of the client",
            required: true,
            type: "string",
          },
          {
            name: "senderEmail",
            in: "path",
            description: "email of the client",
            required: true,
            type: "string",
          },
          {
            name: "senderMessage",
            in: "path",
            description: "message from the Client",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
    "/messages/delete/{id}": {
      delete: {
        tags: ["MESSAGES"],
        summary: "Delete a message by its id ",
        description: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the the recieved message",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "",
            },
          },
          401: {
            description: "Unauthorized",
            schema: {
              $ref: "",
            },
          },
          500: {
            description: "Internal Server Error",
            schema: {
              $ref: "",
            },
          },
        },
      },
    },
  },
};
module.exports = swaggerDefinition;