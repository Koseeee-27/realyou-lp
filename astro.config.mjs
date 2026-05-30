// @ts-check
import { defineConfig } from 'astro/config';

// Astro はデフォルトで静的サイト(SSG)。
// output: 'static' を明示しておくことで、SSR には行かない(サーバー無しでデプロイ)。
// ビルドすると dist/ に素の HTML/CSS が吐かれ、Cloudflare Pages はそれを配るだけになる。
export default defineConfig({
  output: 'static'
});
