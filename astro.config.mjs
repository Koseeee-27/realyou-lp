// @ts-check
import { defineConfig } from 'astro/config';

// Next.js との違い:
// - next.config.js のような巨大な設定は不要。Astro はデフォルトで静的サイト(SSG)。
// - output: 'static' を明示しておくことで、SSR には絶対に行かない(サーバー無しでデプロイ)。
//   ビルドすると dist/ に素の HTML/CSS が吐かれ、Vercel はそれを配るだけになる。
export default defineConfig({
  output: 'static',
});
