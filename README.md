# This-Blog

This-Blog is a modern blogging platform built with a robust and scalable stack:

- **Frontend:** React
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
  "password": "yourpassword"
}
```

**Response:**
- `200 OK`
  ```json
  {
    "jwt": "<token>"
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
    "jwt": "<token>"
  }
  ```
- `403 Forbidden`
  ```json
  {
    "error": "user not found"
  }
  ```

---

## Notes

- JWT tokens are returned on successful signup and signin. Use them in the `Authorization` header for protected routes.
- The backend leverages Cloudflare Workers for high scalability and low latency.
- Prisma Accelerate is used for efficient connection pooling with PostgreSQL.
- Zod is used for schema validation and type inference, especially for frontend type safety.

Note:Copilot was not wrking i will add docs later