# Next.js Todo List

A simple, in-memory todo list application built with Next.js and TypeScript. This application allows users to manage their tasks with a clean, responsive interface.

## Features

- Add new tasks to your todo list
- Mark tasks as complete/incomplete
- Delete tasks from your list
- Responsive design that works on both desktop and mobile
- Data stored in memory (refreshing will reset the todos)

## Technologies Used

- **Next.js** - React framework for building the UI
- **TypeScript** - For type-safe code
- **Context API** - For state management
- **Tailwind CSS** - For styling

## Project Structure

```
nextjs-todo-list/
├── app/                     # Next.js App Router directory
│   ├── components/          # React components
│   │   ├── TodoApp.tsx      # Main app component wrapper
│   │   ├── TodoForm.tsx     # Form for adding todos
│   │   ├── TodoItem.tsx     # Individual todo item
│   │   └── TodoList.tsx     # List of todos
│   ├── contexts/            # React contexts
│   │   └── TodoContext.tsx  # Todo state management
│   ├── types/               # TypeScript types
│   │   └── todo.ts          # Todo interfaces
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── public/                  # Static assets
└── package.json             # Project dependencies
```

## How to Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Coding Standards

This project follows these coding standards:
- Function declarations instead of function expressions
- Boolean variables prefixed with verbs (is, has, can)
- Short and focused functions (< 20 lines)
- Single level of abstraction per function
- TypeScript interfaces over types

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
