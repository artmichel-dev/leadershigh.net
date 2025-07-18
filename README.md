# Nebula - Astro

Nebula - Astro is a modern, dark-themed SaaS template built using Tailwind CSS, Astro.js, Alpine.js, and TypeScript.

## Getting Started

1. Unzip and open the folder of the theme with your editor of choice.
2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. Run the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

4. The template should now be running on [http://localhost:4321](http://localhost:4321).

## Template Structure

```text
/
├── 📁public # Static assets (favicon, OG image)
├── 📁src # Source files
│ ├── 📁components # Reusable UI components
│ ├── 📁layouts # Page layouts
│ ├── 📁pages # Astro pages
│ ├── 📁styles # Global styles
│ ├── 📁scripts # Custom and vendor scripts
│ ├── 📁images # Image assets
│ ├── 📁icons # SVG icons
│ ├── types.ts # TypeScript type definitions
│ └── config.ts # Site configuration
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
```

## Typescript

Nebula comes with full Typescript support, offering robust typing and advanced language features. Astro's built-in [support for TypeScript](https://docs.astro.build/en/guides/typescript/) allows for writing typescript directly in Astro components, with benefits such as error prevention at runtime and enhanced code understanding through type definition of components and props.

### Typescript configuration

You can find the Typescript configuration at the root of the project: `tsconfig.json`. Our setup follows Astro's guidelines for TypeScript integration, using one of Astro's extendable `tsconfig.json` templates. We've chosen the 'strict' template for its balance between strictness and flexibility, and because it is the template recommended by Astro.

In the `tsconfig.json`, we also establish module path aliases, creating shortcuts for imports related to components, images, utility functions, and data, all pointing directly to the `/src` directory. This enables us to use succinct import statements like `import HomeHero from @components/home/HomeHero.astro`, streamlining file referencing and enhancing project readability.

### Types Definition

In `src/types.ts`, we define global data types for the site, facilitating consistency and ease of use across various components and modules. This ensures that the data structures used throughout the site are uniform, making the code more maintainable and reducing potential for errors.

## Sitemap

The template simplifies the creation of a sitemap, aiding search engines like Google in more efficiently crawling your site. We use `@astrojs/sitemap`, Astro's official integration, to automatically generate a sitemap during your project build, outlining all pages of your site.

The sitemap generation is configured in the `astro.config.mjs` file. Here, you need to specify the deployment/site URL using the site property. Our template uses the `SITE.website` variable defined in the `src/config.ts` global configuration file for this purpose. Remember to update the website property in `src/config.ts` with your actual production website URL when deploying your site.

```javascript
// src/config.ts
export const SITE: Site = {
  website: 'https://nebula-astro.tailwindawesome.com', // replace this with your deployed domain
  // ... other site properties
}
```

## Tailwind CSS

Tailwind CSS and its dependencies were installed using [Astro's official Tailwind integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/). If you are not familiar with the Tailwind CSS framework, I would recommend checking out the [Tailwind documentation](https://tailwindcss.com/docs).

We've tried to minimize any custom CSS and only rely on Tailwind's utility classes and a few additional classes defined within the `tailwind.config.js` file. This template additionally uses 1 official Tailwind CSS plugin (`@tailwindcss/forms`).

## Site Configuration

Global site settings, including SEO metadata, can be customized in `src/config.ts`.

## Layouts and Components

Customize the layouts in `src/layouts`, and individual components in the `src/components` directory.

## Fonts

Nebula uses the Geist Sans and Geist Mono fonts from Vercel. These are loaded via `@fontsource` packages.

## Icons

The icons used for this theme are part of the [Hero Icons](https://heroicons.com/) set that is free to use and published under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

Some of the examples in Nebula use [Nucleo App](https://nucleoapp.com/premium-icons) icons which we have acquired a license for. You are free to use the Nucleo icons included in this template on your projects, but if you are interested in using the rest of their premium icons you can buy a license on their [website](https://nucleoapp.com/).

This template uses [astro-icon](https://github.com/natemoo-re/astro-icon#readme) in order to make using these icons easier. It defines a straightforward Icon component for Astro that allows you to use custom SVG icons (sourced from the `src/icons` directory) or icons from common icon packs, powered by [Iconify](https://iconify.design/).

## Images

All of the images used in the template are free to use and are either from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), or custom-made.

## Deployment

The easiest way to deploy your Astro site is either with [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). To learn more you can read Astro's official docs on [deploying with Vercel](https://docs.astro.build/en/guides/deploy/vercel/) or [deploying with Netlify](https://docs.astro.build/en/guides/deploy/netlify/)

## License

This site template is a commercial product and is licensed under the [Tailwind Awesome license](https://www.tailwindawesome.com/license).

## Learn More

To learn more about Astro, take a look at the following resources you can check their [official documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## Additional Help

If you need additional help setting up the template or have any questions, feel free to contact us at <rodrigo@tailwindawesome.com>.
