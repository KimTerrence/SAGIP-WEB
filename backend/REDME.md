mkdir backend
cd backend
npm init -y
--------------------------------------------------------------------

npm install express
npm install -D typescript ts-node-dev @types/node @types/express
--------------------------------------------------------------------

npx tsc --init
--------------------------------------------------------------------

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "rootDir": "src",
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
--------------------------------------------------------------------

// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
-------------------------------------------------------------------

"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
-------------------------------------------------------------------

npm run dev
-------------------------------------------------------------------

npm run build
npm start
-------------------------------------------------------------------
/backend
├── src/
│   ├── controllers/       # Route handlers
│   ├── routes/            # Route definitions
│   ├── models/            # DB models or interfaces
│   ├── services/          # Business logic (e.g. userService)
│   ├── middlewares/       # Express middlewares
│   ├── config/            # Config, env, DB connection
│   ├── utils/             # Helper functions
│   └── index.ts           # Entry point
├── dist/                  # Compiled JS (auto-generated)
├── .env                   # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

