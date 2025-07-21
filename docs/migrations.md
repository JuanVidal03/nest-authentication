# 📦 Prisma Migrations Guide

### 1. 🛠️ Create the Model

Define your table schema inside the `schema.prisma` file. For example:

```prisma
model User {
  id Int @id @default(autoincrement())
  username String
  email String @unique
  password String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users") // Optional: maps the model to a DB table named "users"
}
```

### 2. 🧱 Create the Migration

Generate a new migration based on your model definitions:

```bash
pnpm prisma migrate dev --name <migration-name>
```

Replace <migration-name> with something meaningful like create-users-table.

### 3. 🚀 Apply Migrations (in Production or CI/CD)

To apply pending migrations (e.g., in production):

```bash
pnpm prisma migrate deploy
```

This command executes all unapplied migrations in the correct order.


### 4. ✅ Verify Migration Status

To visually inspect the data and confirm that migrations were applied:

```bash
pnpm prisma studio
```

This opens Prisma Studio, a web-based UI for viewing and editing your database.
