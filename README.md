# NestJS - prisma -authentication

### Config prisma and db
1. Install prisma

```bash
pnpm add -D prisma
```

2. Create database connection (postgresl in this case)

```bash
pnpm prisma init --datasource-provider postgresql
```

3. Run first migration

```bash
pnpm prisma migrate dev --name init
```

4. Add prisma client

```bash
pnpm add @prisma/client
```

5. Prisma generate

```bash
pnpm prisma generate
```