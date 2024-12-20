# Tamagui + Solito + Next + Expo Monorepo

```sh
npm create tamagui@latest
```

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Tamagui + Solito app clone of [starter-free](https://github.com/tamagui/starter-free) repo.

Many thanks to [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the Solito starter monorepo which this was forked from. Check out his [talk about using expo + next together at Next.js Conf 2021](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

> [!TIP]
> Switching from `app` to `pages` router:
>
> - remove `app` folder from `apps/next`
> - move `index.tsx` from `pages-example` to `pages` folder
> - rename `pages-example-user` to `user` and be sure to update `linkTarget` in `screen.tsx` to `user` as well
> - delete `SwitchRouterButton.tsx` component and remove it from `screen.tsx` and `packages/ui/src/index.tsx`
> - search for `pagesMode` keyword and remove it

## 🏁 Start the app

- Install dependencies: `bun install`

- Next.js local dev: `bun web`

To run with optimizer on in dev mode (just for testing, it's faster to leave it off): `bun web:extract`. To build for production `bun web:prod`.

To see debug output to verify the compiler, add `// debug` as a comment to the top of any file.

- Expo local dev: `bun native`

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `@gtw/ui` for how this works.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
bun add zustand
cd ../..
bun install
# or
bun --filter 'app' add zustand
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
bun add react-native-reanimated
cd ../..
bun install
# or
bun --filter 'expo-app' add react-native-reanimated
```

## Update new dependencies

### Pure JS dependencies

```sh
bun update --latest
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

## Deploying to Vercel

- Root: `apps/next`
- Install command to be `bun install`
- Build command: leave default setting
- Output dir: leave default setting

### Troubleshooting Vercel Deployment

If after pushing to GitHub you're seeing that your automatic vercel deployment failed because of an error,
Run `bun install` locally and then commit and push the changes to GitHub.
