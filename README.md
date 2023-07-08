<h3 align="center">ohqte/site</code></h3>
<h6 align="center">
  <a href="#📖-intro">intro</a>
  ·
  <a href="#⚙-setup">setup</a>
  ·
  <a href="#🗂️-used">used</a>
</h6>

<p align="center">
 <a href="https://github.com/ohqte/site/blob/main/LICENSE">
  <img alt="license" src="https://img.shields.io/badge/license-custom-green">
 </a>
 <a href="https://ohqte.vercel.app">
  <img alt="vercel-status"
  src="https://vercelbadge.vercel.app/api/ohqte/site">
 </a>
 <a href="https://github.com/ohqte/site/discussions">
  <img alt="blogs" src="https://img.shields.io/github/discussions/ohqte/site?logo=devdotto&label=blogs">
 </a>
</p>

## 📖 intro

> a mini fullstack site i made for my portfolio that implents the following technologies:
>
> -   [mysql](https://www.mysql.com/ "MySQL-pscale")
> -   [prisma](https://www.prisma.io/ "prisma-ORM")
> -   [edge](https://vercel.com/features/edge-functions "vercel-edge")
> -   [sveltekit](https://kit.svelte.dev/ "sveltekit/svelte")

### 🔍 todo

<!-- ✔️ | ❌ -->

|     | name              | type      | badge                                                                                  |
| --- | ----------------- | --------- | -------------------------------------------------------------------------------------- |
| ✔️  | /                 | page      | ![svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff)        |
| ❌  | /blog             | page      | ![svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff)        |
| ✔️  | /blog/[slug]      | page      | ![svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff)        |
| ❌  | /projects         | page      | ![svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff)        |
| ❌  | /connect          | page      | ![svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff)        |
| ✔️  | Prisma ORM        | database  | ![prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff)        |
| ✔️  | PlantScale MySQL  | database  | ![pscale](https://img.shields.io/badge/PlanetScale-000?logo=planetscale&logoColor=fff) |
| ❌  | feed              | api       | ![RSS Badge](https://img.shields.io/badge/RSS-FFA500?logo=rss&logoColor=fff)           |
| ❌  | sitemap           | api       | ![svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff)        |
| ❌  | Command Palette   | component | ![svelte](https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff)        |
| ❌  | Giscus Comments   | component | ![gh](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff)            |
| ❌  | @vercel/og        | component | ![vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff)           |
| ❌  | @vercel/analytics | analytics | ![vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff)           |

## ⚙ setup

> **Warning**
>
> incompleted documentation

-   setup a `.env` file in the following format:

```properties
# .env

# giscus
GISCUS_REPO = "user/repo"

# authjs
AUTH_CLIENT_ID = "***-***"
AUTH_CLIENT_SECRET = "***-***"
AUTH_SECRET = "***-***"
```

-   setup the following variables on the respective platforms:

| variable             | platform                                                 |
| -------------------- | -------------------------------------------------------- |
| `GISCUS_REPO`        | ![v](https://img.shields.io/badge/env-black?logo=vercel) |
| `AUTH_CLIENT_ID`     | ![v](https://img.shields.io/badge/env-black?logo=vercel) |
| `AUTH_CLIENT_SECRET` | ![v](https://img.shields.io/badge/env-black?logo=vercel) |
| `AUTH_SECRET`        | ![v](https://img.shields.io/badge/env-black?logo=vercel) |

-   run the following commands to host site on localhost:

```bash
$ cd site/
>
$ pnpm dev
> site@1.0.0 dev ~/site
> vite dev

VITE v4.0.0  ready in 1000 ms
  ➜  Local:   http://localhost:2000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## 🗂️ used

<details open>
  <summary>
    <h3>🔌  dependencies</h3>
  </summary>

![pnpm](https://img.shields.io/badge/pnpm-%234a4a4a.svg?logo=pnpm&logoColor=f69220)
![vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)
![vercel](https://img.shields.io/badge/vercel-%23000000.svg?logo=vercel&logoColor=white)
![svelte](https://img.shields.io/badge/Svelte-4A4A55?logo=svelte&logoColor=FF3E00)
![sveltekit](https://img.shields.io/badge/SvelteKit-FF3E00?logo=Svelte&logoColor=white)
![scss](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)
![rss](https://img.shields.io/badge/rss-F88900?logo=rss&logoColor=white)

</details>
