# Next.js + Tailwind CSS + Typescript Starter

### Features

- [Next.js](https://nextjs.org) for Static Site Generator
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS)
- Code Formatter with [Prettier](https://prettier.io)
- Absolute Imports using `@` prefix
- SEO metadata, JSON-LD and Open Graph tags with Next SEO

### Requirements

- npm

### Getting Started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/calvinrnp-starter-next-tailwind my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Configuration

Configure your SEO Meta tags in src/components/

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png` and `site.webmanifest`: your website favicon and information, you can generate your own from [favicon.io](https://favicon.io/)
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Custom Fonts

1. Import the fonts in the Head component in src/pages/\_document.tsx
2. Add the fonts in tailwind.config.js in theme.extend.fontFamily
   e.g:
   ```
    fontFamily: {
    'sans': ['Roboto', 'Arial', 'sans-serif'],
    'display': ['Bebas Neue', 'Arial', 'sans-serif'],
    }
   ```
