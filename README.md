# This-Blog

This-Blog is a modern blogging platform built with a robust and scalable stack:

- **Frontend:** React (with custom hooks for state management and API calls)
- **Backend:** Cloudflare Workers (using [Hono](https://hono.dev/))
- **Validation & Type Inference:** Zod (for frontend types)
- **Language:** TypeScript
- **ORM:** Prisma (with connection pooling via Accelerate)
- **Database:** PostgreSQL
- **Authentication:** JWT

## API Documentation

### `POST /api/v1/signup`

**Description:**  
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "name": "Your Name"
}
```

**Response:**
- `200 OK`
  ```json
  {
    "jwt": "<token>",
    "user": {
      "id": "userId",
      "email": "user@example.com",
      "name": "Your Name"
    }
  }
  ```
- `400 Bad Request`
  ```json
  {
    "message": "Inputs not correct"
  }
  ```
- `403 Forbidden`
  ```json
  {
    "error": "error while signing up"
  }
  ```

---

### `POST /api/v1/signin`

**Description:**  
Authenticate an existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**
- `200 OK`
  ```json
  {
    "jwt": "<token>",
    "user": {
      "id": "userId",
      "email": "user@example.com",
      "name": "Your Name"
    }
  }
  ```
- `400 Bad Request`
  ```json
  {
    "message": "Inputs not correct"
  }
  ```
- `403 Forbidden`
  ```json
  {
    "error": "user not found"
  }
  ```

---

### `POST /api/v1/blog`

**Description:**  
Create a new blog post.

**Request Body:**
```json
{
  "title": "Blog Title",
  "content": "Blog content"
}
```

**Response:**
- `200 OK`
  ```json
  {
    "id": "postId"
  }
  ```
- `400 Bad Request`
  ```json
  {
    "message": "Inputs not correct"
  }
  ```
- `401 Unauthorized`
  ```json
  {
    "error": "unauthorized"
  }
  ```

---

### `PUT /api/v1/blog`

**Description:**  
Update an existing blog post.

**Request Body:**
```json
{
  "id": "postId",
  "title": "Updated Title",
  "content": "Updated content"
}
```

**Response:**
- `200 OK`
  ```json
  {
    "id": "postId",
    "title": "Updated Title",
    "content": "Updated content"
  }
  ```
- `400 Bad Request`
  ```json
  {
    "message": "Inputs not correct"
  }
  ```
- `401 Unauthorized`
  ```json
  {
    "error": "unauthorized"
  }
  ```

---

### `GET /api/v1/blog/bulk`

**Description:**  
Retrieve all blog posts.

**Response:**
- `200 OK`
  ```json
  [
    {
      "id": "postId",
      "title": "Blog Title",
      "content": "Blog content",
      "author": {
        "name": "Author Name"
      }
    }
  ]
  ```

---

### `DELETE /api/v1/blog/delete-all`

**Description:**  
Delete all blog posts.

**Response:**
- `200 OK`
  ```json
  {
    "message": "All blog posts have been deleted."
  }
  ```

---

### `GET /api/v1/blog/:id`

**Description:**  
Retrieve a specific blog post by ID.

**Response:**
- `200 OK`
  ```json
  {
    "id": "postId",
    "title": "Blog Title",
    "content": "Blog content",
    "author": {
      "name": "Author Name"
    }
  }
  ```

---