# Real You 紹介サイト (realyou-lp)

技育博 vol.1 の展示で使う、Real You の紹介・技術ショーケースサイト。
QR から着地 → CTA でアプリ本編へ誘導する 1 ページの静的サイト。

- アプリ本編（最新デプロイ）: https://realyou-jp.vercel.app/
- アプリ本編リポジトリ: https://github.com/Koseeee-27/real-you
- 仕様書・デプロイ手順: KC3 の Notion ドキュメント（チーム内で管理）

## 技術構成

- **Astro**（`output: 'static'` の SSG。SSR は使わない）
- 素の CSS（scoped style）+ 共通デザイントークン（`src/styles/global.css`）
- デプロイ: Cloudflare Pages（GitHub 連携で push → 自動デプロイ）。build: `npm run build` / 出力: `dist`

## セットアップ

```bash
npm install
npm run dev      # http://localhost:4321
```

| コマンド | 役割 |
|---|---|
| `npm run dev` | 開発サーバー（保存で自動リロード） |
| `npm run build` | 本番ビルド（`dist/` 生成） |
| `npm run preview` | ビルド結果をローカル確認 |

## ディレクトリ構成

```
realyou-lp/
├─ public/               静的素材（logo.png / favicon.png / architecture.svg / tech ロゴ）
├─ src/
│  ├─ pages/index.astro  トップ（1 ページ）
│  ├─ layouts/Base.astro 共通レイアウト（<head>・フォント）
│  ├─ components/        セクションごとのコンポーネント
│  ├─ styles/global.css  デザイントークン・共通ユーティリティ
│  └─ config.ts          URL・診断軸・ゲーム等の共有定数（真実の単一ソース）
├─ astro.config.mjs
└─ package.json
```

## 後で差し替える素材（現在プレースホルダ）

| 素材 | 差し替え方法 |
|---|---|
| 結果画面スクショ | 本編から撮影 → `public/` に配置し、`src/components/Results.astro` の `SHOTS[].src` を実ファイルパスに変更 |

> システム構成図は `public/architecture.svg` に配置済み。

## Astro 初学者メモ

- `.astro` は front matter（`---` 内・ビルド時に1回実行）＋ HTML テンプレート。`className` ではなく **`class`**。
- ルーティングは `src/pages/` 配下のファイル＝パス。`index.astro` が `/`。
- `public/` のファイルはそのままのパスで配信（`public/logo.png` → `/logo.png`）。
- `<style>` はそのファイルに自動で scope される（CSS Modules 不要）。
- デフォルトでブラウザに JS を送らない。動きが要る所だけ `client:*` を付ける（本サイトは未使用）。
