# Real Estate Backend

Simple Node.js + Express API with MongoDB for managing properties. Only an authenticated admin can add/update/delete properties. Public can view listings.

## Setup

1. Copy `.env.example` to `.env` and set values for `MONGO_URI`, `JWT_SECRET`, and optionally `PORT`.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Create an initial admin account:
   ```bash
   node sampleAdmin.js admin@example.com strongpassword
   ```
4. Start the server:
   ```bash
   npm run dev   # requires nodemon
   # or
   npm start
   ```

## API Routes

### Auth
- `POST /api/auth/login` – body `{ email, password }` returns `{ token }`

### Properties
- `GET /api/properties` – public
- `POST /api/properties` – admin only (Bearer token header). Accepts `multipart/form-data` with an `image` file field; uploaded images are served from `/uploads`.
- `PUT /api/properties/:id` – admin only. Can accept new `image` file in the same way.
- `DELETE /api/properties/:id` – admin only

All responses are JSON.

## Project Structure

```
backend/
 ├─ models/
 │   ├ Admin.js
 │   └ Property.js
 ├─ routes/
 │   ├ auth.js
 │   └ property.js
 ├─ middleware/
 │   └ authMiddleware.js
 ├─ server.js
 ├─ sampleAdmin.js
 ├─ package.json
 └─ .env.example
```

## Notes
- Uses ES module syntax (`import`/`export`).
- JWT tokens expire in 1 day.
- Passwords are hashed with bcrypt.
