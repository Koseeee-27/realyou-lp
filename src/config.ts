/*
 * サイト全体で共有する定数の「真実の単一ソース」。
 * URL・診断軸・ゲーム情報をここに集約し、各コンポーネントは import して使う
 * (同じ値を複数ファイルにハードコードしない = DRY)。
 */

/** アプリ本編(デプロイ先)。CTA ボタンの遷移先 */
export const APP_URL = 'https://realyou-jp.vercel.app/';

/** フッターのリンク */
export const LINKS = {
  github: 'https://github.com/Koseeee-27/real-you',
  demo: 'https://youtu.be/yqQI1Z4WQOc',
  app: APP_URL,
} as const;

/** チーム名 */
export const TEAM_NAME = 'チーム6 遅刻ラーメン';

/** 5 つの診断軸(本編 docs/project.md より) */
export const AXES = [
  { name: '慎重さ', range: '大胆 ↔ 慎重' },
  { name: '冷静さ', range: '感情的 ↔ 冷静' },
  { name: '論理性', range: '直感的 ↔ 論理的' },
  { name: '協調性', range: '自己主張 ↔ 協調' },
  { name: '積極性', range: '受動的 ↔ 積極的' },
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

/** 技術スタック(選定理由を一言添える + 公式ドキュメントへのリンク)。
 *  icon: public/tech/<icon>.svg のファイル名(モノクロSVG)。色は color で着色(CSS mask)。
 *  icon が null のものは文字チップで表示する。
 *  ⚠️ Gemini API / Web Speech API / Web Audio API は実態として未使用なので書かない。 */
export interface TechItem {
  name: string;
  reason: string;
  href: string;
  icon: string | null;
  color: string;
}

export const TECH_STACK: { layer: string; items: TechItem[] }[] = [
  {
    layer: 'Frontend',
    items: [
      { name: 'Next.js 16', reason: 'App Router での高速な静的配信', href: 'https://nextjs.org/docs', icon: 'nextdotjs', color: '#000000' },
      { name: 'React 19', reason: 'コンポーネントベースの UI', href: 'https://react.dev/', icon: 'react', color: '#149ECA' },
      { name: 'TypeScript', reason: '型安全な開発', href: 'https://www.typescriptlang.org/docs/', icon: 'typescript', color: '#3178C6' },
      { name: 'Tailwind CSS 4', reason: '新ブルータリズムを素早く実装', href: 'https://tailwindcss.com/docs', icon: 'tailwindcss', color: '#06B6D4' },
      { name: 'jotai', reason: 'ゲーム状態を軽量に管理', href: 'https://jotai.org/', icon: null, color: '#000000' },
      { name: 'Motion (framer-motion)', reason: 'ゲームの動きづけ', href: 'https://motion.dev/', icon: 'framer', color: '#0055FF' },
      { name: 'Recharts', reason: '結果のチャート描画', href: 'https://recharts.org/', icon: null, color: '#22B5BF' },
    ],
  },
  {
    layer: 'Backend',
    items: [
      { name: 'Express 5', reason: 'シンプルな REST API', href: 'https://expressjs.com/', icon: 'express', color: '#000000' },
      { name: 'Supabase', reason: 'DB アクセスと認証基盤', href: 'https://supabase.com/docs', icon: 'supabase', color: '#3FCF8E' },
    ],
  },
  {
    layer: 'インフラ',
    items: [
      { name: 'Vercel', reason: 'フロントエンドの自動デプロイ', href: 'https://vercel.com/docs', icon: 'vercel', color: '#000000' },
      { name: 'Render', reason: 'バックエンドのホスティング', href: 'https://render.com/docs', icon: null, color: '#5847EB' },
      { name: 'Supabase', reason: 'PostgreSQL データベース', href: 'https://supabase.com/docs', icon: 'supabase', color: '#3FCF8E' },
    ],
  },
];

/** チームメンバー(docs/lp-spec.md「メンバー紹介」準拠)。
 *  - name は表示名(ニックネーム)。個人名(姓)は出さない。
 *  - icon は public/members/<icon>（技育博メンバーは作成アイコン、KC3組は GitHub アバターをローカル化）。
 *  - github / x / links / comment は未記入(undefined)なら表示しない。 */
export interface Member {
  id: string;
  name: string;
  role: string;
  icon: string;
  github?: string;
  x?: string;
  links?: { label: string; url: string }[];
  comment?: string;
}

export const MEMBER_GROUPS: { group: string; note?: string; members: Member[] }[] = [
  {
    group: '技育博メンバー',
    members: [
      {
        id: 'kose',
        name: 'こーせー',
        role: 'リーダー / フロントエンド / 設計',
        icon: 'kose.png',
        // spec は github.com/Koseeee だが 404。実在する Koseeee-27 を使用
        github: 'https://github.com/Koseeee-27',
        x: 'https://x.com/k_k277474',
        links: [
          {
            label: 'ポートフォリオ',
            url: 'https://porfolio-kosei.notion.site/Portfolio-353a8572e3bc805b8e54d9bc2acb2802',
          },
        ],
        comment: 'フロントエンド！！！',
      },
      {
        id: 'ryusei',
        name: 'りーせ',
        role: 'バックエンド',
        icon: 'ryusei.jpg',
        github: 'https://github.com/ru-se',
        x: 'https://x.com/ri_se_yu',
        comment:
          '僕自身MBTIは一切信用してないです！そこからこの企画が生まれました！！！',
      },
      {
        id: 'ogue',
        name: 'おぐー',
        role: 'デザイン / フロントエンド / MBTI キャラクターイラスト',
        icon: 'ogue.jpg',
        github: 'https://github.com/nightstar039',
        x: 'https://x.com/link_create_09',
        comment:
          '創作大好き！！',
      },
    ],
  },
  {
    group: 'KC3Hack メンバー',
    note: '技育博には参加していませんが、KC3Hack で開発に貢献したメンバー',
    members: [
      {
        id: 'tamacha',
        name: 'たまちゃ',
        role: 'デザイン / FE / BE / 診断ロジック（KC3Hack 時）',
        icon: 'tamacha.jpg',
        github: 'https://github.com/tamtya',
      },
      {
        id: 'michika',
        name: 'みちか',
        role: 'FE / デモ動画（KC3Hack 時）',
        icon: 'michika.png',
        github: 'https://github.com/mimiyako3',
      },
    ],
  },
];

/** 開発プロセス・ツール。CI/CD は連絡ツールと混ぜず「開発・デプロイ」側に置く。 */
export const DEV_TOOLS = [
  {
    group: '開発・デプロイ',
    items: [
      { name: 'GitHub', desc: 'バージョン管理・PR レビュー' },
      { name: 'CI/CD', desc: 'push ごとに自動ビルド・型チェック' },
    ],
  },
  {
    group: 'コミュニケーション・管理',
    items: [
      { name: 'Notion', desc: 'ドキュメント・タスク管理' },
      { name: 'Figma / FigJam', desc: 'UI デザイン・ブレスト' },
      { name: 'Discord', desc: 'チーム連絡' },
    ],
  },
] as const;
