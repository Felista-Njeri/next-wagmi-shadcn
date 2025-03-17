# next-wagmi-shadcn

A simple starter template for Web3 dApps using Next.js 15, Wagmi, RainbowKit, and Shadcn for styling. This package helps developers skip the tedious setup and get straight to building!

## Features

1. Next.js 15
2. TailwindCSS & Shadcn for modern UI styling
3. Wagmi for blockchain interaction
4. RainbowKit for Web3 wallet connection

## Installation and Usage

You can quickly scaffold a new Web3 project with:

```    
npx create-next-wagmi-shadcn
```

```
cd <project_name>
```

```
npm run dev
```

## Wallet Connection

RainbowKit is pre-configured for wallet connection. You can find the setup inside `app/providers.tsx`.

## UI Components with Shadcn

Shadcn components are already set up. Add more by using:

    npx shadcn@latest add <component>

Use them by importing e.g,

    import { Button } from "@/components/ui/button"

For more info visit their documentation at https://ui.shadcn.com/docs/components/button

## Configuration

1. Update your Tailwind config in tailwind.config.ts if you need customization.
2. Modify RainbowKit settings in providers.tsx to match your project needs.
3. Add custom UI components using ShadCN.

## NOTE: 

Remember to add `use client` in every component that uses a wagmi hook such as `useWriteContract` or `useReadContract`. This is very important otherwise your app won't work as intended.

## Contribution

Feel free to contribute or report any issues.

Also, kindly star this project on Github if you find it helpful :D

https://github.com/Felista-Njeri/next-wagmi-shadcn
