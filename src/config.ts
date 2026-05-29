/*
 * サイト全体で共有する定数の「真実の単一ソース」。
 * URL・診断軸・ゲーム情報をここに集約し、各コンポーネントは import して使う
 * (同じ値を複数ファイルにハードコードしない = DRY)。
 */

/** アプリ本編(デプロイ先)。CTA ボタンの遷移先 */
export const APP_URL = 'https://2026-team6.vercel.app/';

/** フッターのリンク */
export const LINKS = {
  github: 'https://github.com/kc3hack/2026_team6',
  demo: 'https://youtu.be/yqQI1Z4WQOc',
  app: APP_URL,
} as const;

/** チーム名 */
export const TEAM_NAME = 'チーム6 遅刻ラーメン';

/** 5 つの診断軸(本編 docs/project.md より) */
export const AXES = [
  { name: '慎重さ', range: '大胆 ↔ 慎重', emoji: '🧐' },
  { name: '冷静さ', range: '感情的 ↔ 冷静', emoji: '🧊' },
  { name: '論理性', range: '直感的 ↔ 論理的', emoji: '🧩' },
  { name: '協調性', range: '自己主張 ↔ 協調', emoji: '🤝' },
  { name: '積極性', range: '受動的 ↔ 積極的', emoji: '🔥' },
] as const;

/** 3 つのゲーム(対外向けの粒度。生データ取得方法は書かない) */
export const GAMES = [
  {
    no: 1,
    title: '規約の罠',
    summary: '利用規約の同意画面に見せかけて、無意識の操作を計測する。',
    accent: 'var(--accent-blue)',
  },
  {
    no: 2,
    title: '荷物仕分け',
    summary: 'ベルトコンベアの仕分けゲームで、判断プロセスと冷静さを計測する。',
    accent: 'var(--accent-red)',
  },
  {
    no: 3,
    title: '空気読み',
    summary: '職場チャットで、同調するか意見を貫くかを計測する。',
    accent: 'var(--accent-pink)',
  },
] as const;

/** 技術スタック(選定理由を一言添える)。
 *  ⚠️ Gemini API / Web Speech API / Web Audio API は実態として未使用なので書かない。 */
export const TECH_STACK = [
  {
    layer: 'Frontend',
    items: [
      { name: 'Next.js 16 (App Router)', reason: '高速な静的配信とルーティング' },
      { name: 'React 19 / TypeScript', reason: '型安全な UI 構築' },
      { name: 'Tailwind CSS 4', reason: '新ブルータリズムを素早く実装' },
      { name: 'jotai', reason: 'ゲーム状態を軽量に管理' },
      { name: 'framer-motion', reason: 'ゲームの動きづけ' },
      { name: 'recharts', reason: '結果のレーダー / 比較チャート描画' },
    ],
  },
  {
    layer: 'Backend',
    items: [
      { name: 'Express 5 / TypeScript', reason: 'シンプルな REST API' },
      { name: 'Supabase (supabase-js)', reason: 'DB アクセスと認証基盤' },
    ],
  },
  {
    layer: 'インフラ',
    items: [
      { name: 'Vercel', reason: 'フロントエンドの自動デプロイ' },
      { name: 'Render.com', reason: 'バックエンドのホスティング' },
      { name: 'Supabase', reason: 'PostgreSQL データベース' },
    ],
  },
] as const;
