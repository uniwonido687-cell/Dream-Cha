// Dream-cha content — bilingual source of truth

export type Bi = { ja: string; en: string };

export type Member = {
  id: string;
  initials: string;
  tone: string;
  name: Bi;
  role: Bi;
  location: Bi;
  eYears: Bi;
  skills: string[];
  photo?: string;
  bio: Bi;
  quote: Bi;
};

export const team: Member[] = [
  {
    id: "leader",
    initials: "S",
    tone: "oklch(0.55 0.16 250 / 0.28)",
    name: { ja: "鈴木 雄平", en: "Suzuki Yuhei" },
    role: {
      ja: "チームリーダー / テクニカルディレクター",
      en: "Team Leader / Technical Director",
    },
    location: { ja: "経験年数", en: "6 years" },
    eYears: { ja: "6年", en: "Years of experience" },
    skills: ["Go", "Python / FastAPI", "AWS", "Docker", "DB設計", "要件定義"],
    photo: "/members/suzuki.jpg",
    bio: {
      ja: "現役のシニアバックエンドエンジニアとして、DreamChaの開発全体を率いる技術責任者。大規模データベースの最適化やミッションクリティカルなインフラ構築の経験を基に、FigmaやSTUDIOの設計意図を正確に読み取り、API連携や決済機能を安定して運用するための技術設計とディレクションを統括します。",
      en: "An active senior backend engineer and the technical lead overseeing DreamCha's development. Drawing on extensive experience in large-scale database optimisation and mission-critical infrastructure, he translates Figma and STUDIO designs into robust architecture for stable API integrations and payment systems.",
    },
    quote: {
      ja: "皆様の専属CTOとして商談を技術面から支え、クライアントが納得できる提案を組み立てます。複雑なバックエンドも安心してお任せください。",
      en: "As your dedicated CTO, I support client negotiations from the technical side and build proposals they can trust. Leave the complex backend work to us.",
    },
  },
  {
    id: "inoue",
    initials: "I",
    tone: "oklch(0.55 0.15 230 / 0.28)",
    name: { ja: "井上 駿", en: "Shun Inoue" },
    role: {
      ja: "フルスタックエンジニア",
      en: "Full-stack Engineer",
    },
    location: { ja: "経験年数", en: "Years of experience" },
    eYears: { ja: "9年", en: "9 Years" },
    skills: [
      "Node.js",
      "TypeScript",
      "STUDIO",
      "WordPress",
      "外部API連携",
      "React",
    ],
    photo: "/members/inoue.png",
    bio: {
      ja: "見た目の美しさと、裏側のシステムの安定性を両立させるフルスタックエンジニア。STUDIOと外部APIの連携やWordPressの高度なカスタマイズを得意とし、既存デザインの魅力を損なうことなく、必要な機能を柔軟かつ迅速に実装します。",
      en: "A full-stack engineer who balances visual quality with reliable system performance. Specialising in STUDIO integrations, external APIs, and advanced WordPress customisation, he adds the required functionality without compromising the original design.",
    },
    quote: {
      ja: "ノーコードやWordPressの制約にも柔軟に対応します。デザインの美しさを保ちながら、裏側の仕組みを安定して動かします。",
      en: "I work flexibly around the limits of no-code and WordPress, keeping the design beautiful while making the underlying system reliable.",
    },
  },
  {
    id: "yamazaki",
    initials: "Y",
    tone: "oklch(0.52 0.15 200 / 0.28)",
    name: { ja: "山崎 太陽", en: "Taiyo Yamazaki" },
    role: {
      ja: "バックエンドエンジニア",
      en: "Backend Engineer",
    },
    location: { ja: "経験年数", en: "Years of experience" },
    eYears: { ja: "5年", en: "5 Years" },
    skills: [
      "Stripe API",
      "決済API連携",
      "セキュリティ",
      "Node.js",
      "PostgreSQL",
    ],
    photo: "/members/yamazaki-taiyo.png",
    bio: {
      ja: "Stripeをはじめとする外部決済APIの組み込みと、セキュリティ要件の設計を専門とするバックエンドエンジニア。金銭や重要な顧客情報を扱うシステムに対して、正確性と安全性を重視した堅牢な実装を提供します。",
      en: "A backend engineer specialising in external payment API integrations such as Stripe and the design of secure system requirements. He delivers robust implementations focused on accuracy and safety for systems handling payments and sensitive customer data.",
    },
    quote: {
      ja: "決済を扱うシステムだからこそ、正確性と安全性を何より大切にします。決済連携とセキュリティ設計は私にお任せください。",
      en: "Payment systems demand accuracy and security above all else. Leave payment integrations and security design to me.",
    },
  },
  {
    id: "daiki",
    initials: "N",
    tone: "oklch(0.5 0.14 160 / 0.28)",
    name: { ja: "高橋 大樹", en: "Daiki Takahashi" },
    role: {
      ja: "バックエンドエンジニア / データベース最適化",
      en: "Backend Engineer / Database Optimisation",
    },
    location: { ja: "経験年数", en: "Years of experience" },
    eYears: { ja: "7年", en: "7Years" },
    skills: [
      "Node.js",
      "Python",
      "MySQL",
      "PostgreSQL",
      "API設計",
      "高負荷対策",
    ],
    photo: "/members/daiki.png",
    bio: {
      ja: "大規模データベース設計とバックエンド開発に5年間携わり、高負荷に耐えるデータ基盤と高速APIの構築を専門とするエンジニア。利用者やデータ量の増加を見据え、長期的な運用と拡張に対応できるシステムを設計します。",
      en: "A backend engineer with five years of experience in large-scale database design and development. He specialises in high-performance APIs and data platforms built to support increasing traffic, growing datasets, and long-term system expansion.",
    },
    quote: {
      ja: "利用者が増えても安定して動き続けるデータベースと、高速なAPIを設計します。大規模なデータ連携にも確かな基盤で応えます。",
      en: "I design databases that remain stable as usage grows and APIs that stay fast. Large-scale data integration is supported by a solid foundation.",
    },
  },
  {
    id: "nakamura",
    initials: "N",
    tone: "oklch(0.5 0.14 190 / 0.28)",
    name: { ja: "中村 蓮", en: "Ren Nakamura" },
    role: {
      ja: "バックエンドエンジニア / インフラ",
      en: "Backend & Infrastructure Engineer",
    },
    location: { ja: "経験年数", en: "Years of experience" },
    eYears: { ja: "13年", en: "13 Years" },
    skills: ["Go", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    photo: "/members/nakamura.jpg",
    bio: {
      ja: "大規模ECサイトやAPI連携、セキュリティ基盤を安定運用へ導く、バックエンドとインフラの専門エンジニア。データベースの最適化からサーバー設計、自動デプロイ環境の構築まで、サービスを継続的に支える技術基盤を整えます。",
      en: "A backend and infrastructure specialist supporting stable operation of large-scale EC platforms, API integrations, and security systems. He builds the technical foundation for continuous service delivery, from database optimisation and server design to automated deployment.",
    },
    quote: {
      ja: "速度低下やデータ連携への不安を技術面から解消し、将来の機能追加にも対応できる、安定したシステム基盤を設計します。",
      en: "I resolve concerns around performance and data integration, designing a stable foundation that remains ready for future features.",
    },
  },
  {
    id: "Nakajima",
    initials: "H",
    tone: "oklch(0.55 0.15 250 / 0.28)",
    name: { ja: "中島 拓海", en: "Takumi Nakajima" },
    role: {
      ja: "フルスタックエンジニア",
      en: "Full-stack Engineer",
    },
    location: { ja: "経験年数", en: "Years of experience" },
    eYears: { ja: "8年", en: "8 Years" },
    skills: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "Firebase",
      "Stripe",
      "LINE Login",
    ],
    photo: "/members/Nakajima.jpg",
    bio: {
      ja: "フロントエンドとバックエンドの両方を一貫して担当できる、機動力の高いフルスタックエンジニア。Stripeによる決済機能やLINE・Googleなどの認証機能を素早く実装し、デザイナーの細かな画面要件に合わせて裏側の処理を柔軟に調整します。",
      en: "A highly adaptable full-stack engineer capable of handling both frontend and backend development. He rapidly implements Stripe payments and social authentication while adjusting backend behaviour to match detailed interface requirements.",
    },
    quote: {
      ja: "決済やログインを短期間で連携したい案件にも迅速に対応します。画面設計を尊重し、裏側の仕組みを柔軟に組み立てます。",
      en: "I respond quickly when payments and login must be connected on a tight schedule, shaping the backend around the intended interface.",
    },
  },
  {
    id: "sato",
    initials: "S",
    tone: "oklch(0.62 0.12 340 / 0.28)",
    name: { ja: "佐藤 結衣", en: "Yui Sato" },
    role: {
      ja: "デザインコミュニケーター / クリエイティブ通訳",
      en: "Design Communicator / Creative Translator",
    },
    location: { ja: "経験年数", en: "Years of experience" },
    eYears: { ja: "9年", en: "9 Years" },
    skills: [
      "UI/UX",
      "Figma",
      "ワイヤーフレーム",
      "デザインシステム",
    ],
    photo: "/members/sato-chiki.jpg",
    bio: {
      ja: "大手制作代理店で有名ブランドのWebサイトやアプリのUI/UX設計を経験。DreamChaでは自社でのデザイン実務には介入せず、外部の提携デザイナー様が制作されたFigmaやSTUDIOの『意図や世界観』を100%正確に理解し、社内のエンジニア陣が実装時にデザインを1ミリも崩さないよう翻訳・橋渡しを行う専門ディレクター。",
      en: "Experienced in UI/UX design for major brands at agencies. At DreamCha, she never handles design execution directly. Instead, she perfectly interprets external designers' Figma/STUDIO visual intents and translates them into exact engineering specifications to prevent any layout.",
    },
    quote: {
      ja: "皆様のクリエイティブを1ミリも崩さずシステムへ結合します。社内エンジニアへの『デザインの翻訳』は私にお任せください。",
      en: "I ensure your creative vision is merged into the system without losing a single pixel. Leave the technical translation to me.",
    },
  },
  {
    id: "kato",
    initials: "K",
    tone: "oklch(0.55 0.15 245 / 0.28)",
    name: { ja: "加藤 拓海", en: "Takumi Kato" },
    role: {
      ja: "フルスタックエンジニア",
      en: "Full-stack Engineer",
    },
    location: { ja: "経験年数", en: "Years of experience" },
    eYears: { ja: "10年", en: "10 Years" },
    skills: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Stripe",
      "API連携",
      "React",
    ],
    photo: "/members/kato.png",
    bio: {
      ja: "自身が開発したシステムのUI/UX改善を、外部のプロのウェブデザイナーに依頼した際、『デザインの力がシステムの価値をここまで跳ね上げるのか』と猛烈に感動してチームに参画。デザインへの深いリスペクトを胸に、デザイナーが技術の壁に怯えず、100%クリエイティブに集中できる強固な環境をバックエンドから構築するスペシャリスト。",
      en: "Joined the team after seeing an external professional designer transform his system's UI/UX, sparking a deep appreciation for design value. Dedicated to building powerful backend environments where designers can focus entirely on creativity without technical worries.",
    },
    quote: {
      ja: "デザインへの敬意を忘れず、技術的な制約を裏側から解消します。皆様が創造性に集中できる土台を形にします。",
      en: "With deep respect for design, I remove technical barriers behind the scenes so designers can focus fully on creativity.",
    },
  },
];

export type CaseStudy = {
  id: string;
  year: string;
  category: Bi;
  title: Bi;
  before: Bi;
  solution: Bi;
  result: Bi;
  stack: string[];
  metrics: { label: Bi; value: string }[];
  hue: string;
  image?: string;
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "closed-marketing",
    year: "2025.11",
    category: { ja: "会員制マーケティング / クローズドプラットフォーム", en: "Membership Marketing / Closed Platform" },
    title: {
      ja: "会員限定クローズドマーケティングプラットフォーム構築",
      en: "Closed Members-only Marketing Platform Build",
    },
    before: {
      ja: "デザイナーが設計した会員限定サイトに、LINEログイン連動の会員認証と、権限ごとに限定コンテンツを出し分ける仕組みが必要だったが、権限管理の実装や不正アクセスを防ぐ強固なセキュリティ設計が技術的な大きな壁となっていた。",
      en: "A membership-only site designed by a web designer required member authentication integrated with LINE Login and a system to distribute exclusive content dynamic by user roles. However, implementing strict role management and robust security architecture to prevent unauthorized access presented a major technical bottleneck.",
    },
    solution: {
      ja: "デザインを1ミリも崩さず、LINEログイン連動の会員認証やロール（役割）別の動的コンテンツ出し分け、決済連携をバックエンドに完璧に実装しました。認証基盤には「OAuth 2.0 / OIDC」に準拠したセキュアな設計を導入し、中継サーバー（AWS Lambda）でのトークン署名検証や、データベース（Amazon Aurora）側での行レベルセキュリティ（RLS）によるトランザクション排他制御を構築。デザイナー様は複雑な仕様を意識せずデザインに100%集中でき、受注単価を大幅に引き上げることに成功しました。",
      en: "Without altering a single pixel of the design, we perfectly implemented LINE Login integrated authentication, role-based dynamic content filtering, and payment gateway linkages into the backend. By adopting a secure design compliant with OAuth 2.0 / OIDC, we established strict token signature verification via AWS Lambda and row-level security (RLS) with transactional mutual exclusion on Amazon Aurora. This allowed the designer to focus 100% on the visual creative without worrying about complex backend logic, successfully driving a substantial increase in contract value.",
    },
    result: {
      ja: "デザイナーは画面設計に集中したまま、クローズドな会員マーケティング基盤をエンタープライズ基準のフルパッケージで納品。セキュリティリスクやデータ改ざんの危険を完全にゼロに抑え、受注単価が従来の3倍になりました。",
      en: "The designer maximized their focus on interface layouts while delivering an enterprise-grade, closed membership marketing infrastructure as a full package. Security threats and data tampering risks were mitigated to absolute zero, successfully tripling the project's standard contract unit price.",
    },
    stack: ["Next.js", "LINEログイン", "会員認証", "Stripe", "PostgreSQL"],
    metrics: [
      { label: { ja: "形態", en: "Type" }, value: "会員制" },
      { label: { ja: "認証", en: "Auth" }, value: "LINE" },
      { label: { ja: "受注単価", en: "Rate" }, value: "×2" },
    ],
    hue: "oklch(0.5 0.14 250)",
    image: "/cases/wordpress-video.jpg",
  },
  {
    id: "subscription-ec",
    year: "2026.01",
    category: { ja: "サブスクEC / 定期課金", en: "Subscription EC / Recurring Billing" },
    title: {
      ja: "定期課金・サブスクリプション型物販ECプラットフォーム",
      en: "Subscription-based Retail EC Platform",
    },
    before: {
      ja: "物販ECに月額課金の仕組みを載せたいという要望だったが、過去に別のエンジニアの実装でプラグインの不具合による決済エラーが多発し、大クレームになったトラウマがあった。",
      en: "The client requested adding a monthly subscription billing mechanism to their product e-commerce site. However, they had experienced severe trauma from a previous project where another engineer's faulty plugin implementation caused frequent payment errors, resulting in major client complaints.",
    },
    solution: {
      ja: "デザインの世界観を完璧に保ったまま、Stripe BillingのAPIを裏側で驚くほど強固に繋ぎ込み。定期課金・カード更新・失敗リトライを堅牢に構築しました。Webサイトの美しさを損なうことなく、Webhookハンドリングによるイベント駆動型ロジックをNode.js環境で実装し、クレジットカードの有効期限切れに伴う自動更新フローや、決済失敗時のリトライ・通知アルゴリズムをシームレスに最適化。データベース（PostgreSQL）層とも強固に連携させ、決済と在庫管理のデータの不整合を完全にシャットアウトしました。",
      en: "While perfectly preserving the visual world of the design, we integrated the Stripe Billing API in the backend with astonishing robustness, firmly constructing recurring billing, card auto-updates, and failure retry logic. Without compromising the beauty of the website, we implemented an event-driven logic via Webhook handling in a Node.js environment, seamlessly optimizing the automatic renewal flow for expiring credit cards and the retry/notification algorithms for failed transactions. We also established a bulletproof linkage with the database (PostgreSQL) layer, completely shutting out any potential data inconsistencies between payment statuses and inventory tracking.",
    },
    result: {
      ja: "納品後のバグは一切なく、クライアントも大満足。継続課金型の物販ECを安定稼働で納品できました。Stripe決済に起因するエラーや納品後バグは「0」を記録し、ブランドの信頼を揺るがさない堅牢なサブスクリプションEC基盤を確立しました。",
      en: "There were absolutely zero post-delivery bugs, and the client was highly satisfied. We successfully delivered a recurring-billing-based product e-commerce system running on highly stable operations. Post-delivery bugs stemming from Stripe transactions remained at absolute 0, establishing a rock-solid subscription e-commerce infrastructure that protects the brand’s integrity.",
    },
    stack: ["Stripe Billing", "Node.js", "EC", "PostgreSQL"],
    metrics: [
      { label: { ja: "課金", en: "Billing" }, value: "定期" },
      { label: { ja: "決済", en: "Payments" }, value: "Stripe" },
      { label: { ja: "納品後バグ", en: "Post-launch bugs" }, value: "0" },
    ],
    hue: "oklch(0.5 0.13 190)",
    image: "/cases/ec-fullscratch.jpg",
  },
  {
    id: "realestate-portal",
    year: "2026.02",
    category: { ja: "不動産ポータル / 外部データ同期", en: "Real Estate Portal / Data Sync" },
    title: {
      ja: "不動産物件情報・外部データ自動同期ポータルサイト",
      en: "Real-estate Listings Portal with External Data Sync",
    },
    before: {
      ja: "大手不動産会社からの案件で、システム要件の仕様書が難解すぎてデザイナーが頭を抱えていた。外部の物件DBと自動同期する大量データ処理はノーコードでは実装不可能だった。",
      en: "For a major real estate company project, the technical specification sheet for the system requirements was too cryptic, leaving the web designer overwhelmed. Processing massive datasets to automatically synchronize with an external property database was completely impossible using no-code platforms alone.",
    },
    solution: {
      ja: "佐藤がデザインの意図（余白や動線）をエンジニア陣に完璧に『翻訳』。外部APIと定期通信し物件データを正規化して自動同期するバックエンドをPythonで構築しました。さらに、膨大な物件データをストレスなく抽出するため、PostgreSQLデータベースに最適なインデックス（検索高速化の仕組み）を設計し、データ同期時のバッチ処理プロセスを効率化。フロントのレイアウトにバグを起こさない安全なデータ流し込みロジックを実装しました。",
      en: "Sato perfectly translated the designer’s aesthetic intent (such as precise margins and user flows) to our engineering crew. We engineered a robust backend using Python that handles scheduled communication with external APIs to normalize and auto-sync the property records. Furthermore, to extract vast amounts of real estate data without stress, we designed optimal index structures within the PostgreSQL database and streamlined the batch execution workflow. A secure data injection logic was successfully deployed to prevent any dynamic layout issues on the frontend",
    },
    result: {
      ja: "見た目の崩れが一切ない、超高速な検索システムが完成。「技術部門を丸ごと外注できる安心感」を実現しました。自動同期の安定稼働に加え、デザイナーのこだわりであるマージンや余白、レスポンシブ時の「デザインの崩れ」は徹底的に排除して【0】を達成。アクセス集中時でも即座に結果を返す超高速検索により、クライアントからも極めて高い評価を獲得しました。",
      en: "A lightning-fast search infrastructure was accomplished with absolute zero visual layout distortion, fulfilling the ultimate promise of providing peace of mind by acting as your entire outsourced tech department. Along with the highly stable operation of the automated synchronization, layout issues and breaking designs were completely eradicated to record an absolute 0. The ultra-fast querying architecture that delivers instantaneous search results even under heavy traffic loads won stellar acclaim from the client.",
    },
    stack: ["Python", "外部API連携", "PostgreSQL", "自動同期"],
    metrics: [
      { label: { ja: "同期", en: "Sync" }, value: "自動" },
      { label: { ja: "検索", en: "Search" }, value: "超高速" },
      { label: { ja: "崩れ", en: "Breakage" }, value: "0" },
    ],
    hue: "oklch(0.5 0.13 160)",
    image: "/cases/aws-matching.jpg",
  },
  {
    id: "salon-booking",
    year: "2026.04",
    category: { ja: "予約システム / 美容・医療", en: "Booking System / Beauty & Clinic" },
    title: {
      ja: "美容サロン・医療クリニック向けリアルタイム動的予約システム",
      en: "Real-time Dynamic Booking System for Salons & Clinics",
    },
    before: {
      ja: "個人で受けるには荷が重すぎるシステム開発案件で、スタッフ・設備ごとの空き状況をリアルタイムに反映する動的予約やダブルブッキング制御など、裏側の要件が複雑すぎた。",
      en: "The backend architecture for this system development project was far too heavy for an individual freelancer to manage safely, involving highly convoluted requirements such as dynamic scheduling to mirror staff/equipment availability in real time and sophisticated double-booking control.",
    },
    solution: {
      ja: "『前払い不要の完全成果報酬（着金ベース）』で参画し、立替リスクゼロで対応。空き枠をリアルタイムに計算・ブロックする予約エンジンと排他制御をDB層に構築しました。Node.js環境における非同期のトランザクション処理とWebSocket技術を活用し、コンカレントアクセス（同時アクセス）発生時でもデータの整合性を厳格に保護。PostgreSQLデータベース側で適切な行レベルでの排他制御（ロック機構）を設計し、システムエラーによる予約の重複を根底から防止しました。",
      en: "We onboarded the project on a 100% success-fee basis with zero upfront payment (milestone payout upon receipt), managing the infrastructure with absolute zero out-of-pocket risks. We engineered a proprietary reservation engine combined with concurrent mutual exclusion on the database layer to compute and block time slots dynamically in real time. Utilizing asynchronous transaction handling in a Node.js environment alongside WebSocket technology, we guaranteed strict data consistency under high concurrent user spikes. We designed robust row-level row locks inside the PostgreSQL layer, preventing any booking overlaps right at the foundation.",
    },
    result: {
      ja: "鈴木が技術的なリスクの責任を100%引き受け、孤独なフリーランスの恐怖を解消。取りこぼしのないリアルタイム予約システムを納品しました。予約枠の「重複」や決済に起因する「立替リスク」を完全にシャットアウトして【0】を達成。デザイナーが構築した世界観に完全連動する、機会損失ゼロの動的予約プラットフォームの安定稼働を実現しました。",
      en: "Suzuki assumed 100% accountability for all technical and deployment risks, eliminating the crushing anxiety typical for solo freelancers. We delivered a highly accurate, real-time booking ecosystem without missing a single conversion opportunity. Booking duplicates and processing-related financial risks were completely eradicated to a recorded 0, resulting in a flawlessly operating dynamic reservation gateway aligned with the designer's creative vision.",
    },
    stack: ["Node.js", "WebSocket", "リアルタイム予約", "PostgreSQL"],
    metrics: [
      { label: { ja: "予約", en: "Booking" }, value: "動的" },
      { label: { ja: "立替リスク", en: "Cash advance risk" }, value: "0" },
      { label: { ja: "重複", en: "Conflicts" }, value: "0" },
    ],
    hue: "oklch(0.5 0.14 300)",
    image: "/cases/salon-booking.png",
  },
  {
    id: "studio-stripe",
    year: "2026.05",
    category: { ja: "STUDIO × Stripe / サブスク決済", en: "STUDIO × Stripe / Subscription" },
    title: {
      ja: "STUDIO構築サイトへのStripeサブスクリプション決済・顧客管理システム実装",
      en: "Stripe Subscription & Customer Portal on a STUDIO Site",
    },
    before: {
      ja: "「STUDIOで制作したデザインLPをそのまま活かしつつ、裏側にStripeを使った月額サブスクリプション決済と、ユーザーが自分で契約内容を変更できるマイページ（請求管理画面）を作りたい」と相談された共同開発事例。",
      en: "A collaborative development case where a client consulted us to integrate a monthly subscription billing workflow using Stripe into their existing, high-fidelity design LP built on STUDIO, along with a user self-service portal (billing management page) to allow customers to modify their subscription plans on their own.",
    },
    solution: {
      ja: "STUDIOの標準機能では実装不可能な「Stripe Payment Links」および「カスタマーポータル」の裏側ロジックを設計し、デザインを1ミリも崩さずにドッキングさせました。Node.jsを用いた中間API（Webhookサーバー）を仲介させ、決済状態の変化やユーザーの契約プラン変更（アップグレード・ダウングレード）のイベントを検知・処理するバックエンド機構を構築。ノーコードによる圧倒的なフロントエンドの開発スピードと、外部決済プラットフォームの柔軟なAPI連携をセキュアに両立させました。",
      en: "We engineered the underlying backend logic for Stripe Payment Links and the Customer Portal—functionalities entirely impossible to implement via standard STUDIO features—and docked them flawlessly into the system without altering a single pixel of the frontend visual. By deploying an intermediary API (Webhook handler) utilizing Node.js, we constructed a backend mechanism to instantly capture and process billing status transitions and plan modification events (upgrades/downgrades). This securely bridge the gap between high-speed no-code frontend development and the flexible API integration of an enterprise payment infrastructure.",
    },
    result: {
      ja: "「STUDIOでは会員登録や決済機能を作れない」というノーコードの致命的な限界を突破。紙媒体出身のデザイナーが、自分の縄張りを守ったまま企業のDX案件という超高単価市場を開拓しました。公開されたWebサイトは決済の安全性において◎（二重丸）の最高評価を獲得し、デザインの自由度を完全に維持したまま高セキュアな会員制サブスクリプション環境の安定運用を実現しました。",
      en: "We successfully shattered the critical no-code bottleneck where STUDIO alone cannot manage user registrations or deep-linked billing engines. This opened up a lucrative enterprise DX market for a print-media-background designer while perfectly safeguarding their creative territory. The published site achieved a double-circle (◎) top rating for payment security, maintaining full layout integrity while ensuring a highly secure subscription environment.",
    },
    stack: ["STUDIO", "Stripe API (Payment Links)", "Node.js"],
    metrics: [
      { label: { ja: "ツール", en: "Tool" }, value: "STUDIO" },
      { label: { ja: "決済", en: "Payments" }, value: "Stripe" },
      { label: { ja: "公開", en: "Live" }, value: "◎" },
    ],
    hue: "oklch(0.52 0.15 245)",
    image: "/cases/lms-rebuild.jpg",
    link: "https://studio.design",
  },
  {
    id: "manyu-randoselu",
    year: "2026",
    category: { ja: "EC・ブランドサイト / ランドセルメーカー", en: "EC & Brand Site / Randoseru Maker" },
    title: {
      ja: "手づくりランドセルブランドのEC・予約基盤構築",
      en: "EC & Reservation Platform for a Handmade Randoseru Brand",
    },
    before: {
      ja: "職人による手づくりランドセルの世界観を保ちながら、カタログ請求・全国店舗案内・展示会予約・オンライン購入までを一つの導線でつなぐ必要があった。",
      en: "While fully preserving the artisanal world of a handmade satchel brand, it was necessary to seamlessly bridge catalog requests, nationwide store directories, exhibition reservations, and online purchasing workflows into a single, unified user journey.",
    },
    solution: {
      ja: "ブランドのビジュアルを最大限に活かしたUIの上に、会員・カート機能、カタログ請求フォーム、販売スケジュール、店舗・展示会情報を動的に管理できる仕組みを構築。複数の複雑な機能（EC、予約、フォーム、CMS）を一元管理するため、バックエンドのデータ構造を正規化し、APIによるデータ連携を最適化。繁忙期のアクセス集中に耐えられるよう、インフラ側でのオートスケーリング構成とキャッシュ戦略を取り入れ、ブランドの信頼を守る強固な土台を実装しました。",
      en: "On top of a high-fidelity UI that maximizes the brand's visual aesthetics, we constructed a dynamic backend architecture to manage member/cart functionality, catalog request forms, sales schedules, and store/exhibition information in real time. To centralize multiple complex features (E-commerce, booking engines, multi-step forms, and CMS), we normalized the core data models and optimized API payloads. Additionally, to withstand massive traffic spikes during peak sales windows, we integrated auto-scaling infrastructures and proactive caching strategies to implement a rock-solid foundation that safeguards the brand's reputation.",
    },
    result: {
      ja: "情報収集から予約・購入までを回遊できるサイトとして公開。繁忙期の過密な販売スケジュールや大量リクエストにも耐える堅牢な運用体制を実現した。形態はWebとして公開（◎）され、カタログ請求や店舗案内から決済にいたるまで、デザインの美しさと強固なバックエンドシステムが完全に連動したブランドサイトとして高い評価を得ています。",
      en: "The system was successfully deployed as a live site allowing users to fluidly navigate from initial research to event booking and terminal purchases. We achieved a robust operational framework that withstands dense sales schedules and peak seasonal request volumes without a single drop in latency. Fulfilling all Web deployment conditions (◎), the final architecture operates as a premium brand ecosystem where breathtaking frontend visuals and enterprise-grade backend systems function in perfect harmony.",
    },
    stack: ["EC構築", "会員システム", "カタログ請求フォーム", "店舗・展示会管理"],
    metrics: [
      { label: { ja: "形態", en: "Format" }, value: "EC" },
      { label: { ja: "カタログ請求", en: "Catalog" }, value: "Web" },
      { label: { ja: "店舗案内", en: "Store locator" }, value: "◎" },
    ],
    hue: "oklch(0.58 0.10 45)",
    image: "/cases/manyu-randoselu.png",
  },
  {
    id: "libero-home",
    year: "2026",
    category: { ja: "コーポレート・ブランドサイト / 注文住宅", en: "Corporate & Brand Site / Custom Homes" },
    title: {
      ja: "工務店ブランドサイトとイベント予約導線の構築",
      en: "Home-Builder Brand Site with Event Reservation Flow",
    },
    before: {
      ja: "「山梨の暮らしをデザインする」という世界観を伝えながら、モデルハウス見学会や無料相談会の集客・予約をサイト上で完結させたかった。",
      en: "While beautifully conveying the brand identity of Designing the Lifestyle of Yamanashi, the client desired to centralize customer acquisition and reservation management for model house viewings and free consultation sessions entirely on the website.",
    },
    solution: {
      ja: "大判ビジュアルによるブランド表現を軸に、イベント情報の更新・予約フォーム・完成見学会の告知を運用しやすいCMSとして構築。管理画面から投稿されたイベントデータと、各予約フォームの受付上限枠（定員数）をバックエンド側で動的にバインド（紐付け）するロジックを設計。ユーザーがフォームを入力した際のリクエストをセキュアにバリデーション（整合性チェック）し、予約完了メールの自動配信システムや、データベース側での確実なイベント管理・ステータス更新処理を実装しました。",
      en: "Centering on brand expression through large-format visuals, we constructed a highly manageable CMS for updating event information, reservation forms, and open-house announcements. We engineered a dynamic backend logic to securely bind event data submitted via the admin dashboard with the corresponding booking capacity constraints (maximum seats per slot). When a user submits a form, the request is securely validated to check data integrity, combined with an automated confirmation email delivery subsystem and strict event management/status update handling on the database layer.",
    },
    result: {
      ja: "イベントごとに情報を差し替えられる集客基盤としてWebサイトを公開。無料相談会予約への導線を明確化しました。エリア（Yamanashi）に特化した美しいデザインの世界観を完璧に維持したまま、複雑な見学会スケジュールにも柔軟に対応できる強固なCMS予約導線（◎）を確立しました。",
      en: "The infrastructure was successfully deployed as a live marketing website allowing the client to swap and update information seamlessly for each event. The user flow directly leading to consultation bookings was successfully clarified. While perfectly preserving the stunning visual world tailored for the Yamanashi region, we established a resilient CMS-driven booking funnel (◎) capable of flexibly adapting to intricate exhibition schedules.",
    },
    stack: ["ブランドサイト", "イベントCMS", "予約フォーム", "レスポンシブ"],
    metrics: [
      { label: { ja: "相談予約", en: "Booking" }, value: "Web" },
      { label: { ja: "イベント管理", en: "Events" }, value: "CMS" },
      { label: { ja: "エリア", en: "Area" }, value: "Yamanashi" },
    ],
    hue: "oklch(0.55 0.08 150)",
    image: "/cases/libero-home.png",
  },
  {
    id: "art-asada",
    year: "2026",
    category: { ja: "医療・クリニックサイト / 予約", en: "Medical Clinic Site / Reservations" },
    title: {
      ja: "不妊治療クリニックの予約・診療案内サイト構築",
      en: "Fertility Clinic Site with Reservations & Treatment Guide",
    },
    before: {
      ja: "初診のハードルが高い不妊治療において、患者が安心して来院できるよう、診療時間・治療内容・アクセスと予約をわかりやすく整理する必要があった。",
      en: "In infertility treatment, where the psychological barrier for a first-time visit is inherently high, it was essential to organize clinic hours, treatment/testing details, location access, and booking pathways clearly to ease patient anxiety before coming to the clinic.",
    },
    solution: {
      ja: "落ち着いたトーンのデザインで、診療時間表・治療/検査の案内・Web予約・採用情報を動的に管理できる医療機関サイトを構築。複雑に変動する外来シフトや検査スケジュールを管理画面から簡単に入力・反映できる動的CMS機能をバックエンドに実装。医療サイトとして必須となるSSL/TLS暗号化通信の最適化や、Web予約フォームにおけるプライバシー情報の隔離保護ロジックを設計し、デザインの安心感とシステムの安全性（◎）を完璧にドッキングさせました。",
      en: "Adopting a calming and reassuring design tone, we constructed a comprehensive medical institution website capable of dynamically managing clinical schedules, treatment/test guidelines, web reservations, and recruitment updates. We engineered a dynamic CMS on the backend, allowing staff to easily update and display fluctuating outpatient shifts and examination timelines via the admin dashboard. Optimizing secure SSL/TLS encrypted communications—mandatory for healthcare platforms—and designing privacy-data isolation logic for the web reservation forms, we perfectly docked emotional visual comfort with high-level system compliance (◎).",
    },
    result: {
      ja: "予約・診療案内・採用までを1サイトに集約し、来院前の不安を軽減する情報導線を実現した。4市対応エリアをはじめ、駅から「2min」というアクセスの良さを伝えるビジュアルと連動した、機会損失のないセキュアなWeb予約・診療インフラの安定稼働を確立しました。",
      en: "Reservations, clinical overviews, and hiring modules were successfully consolidated into a single site, realizing a fluid information architecture that alleviates patient anxiety prior to their visit. Fully integrated with visuals showcasing its location just 2 min from the station to serve the 4-city target coverage area, we established a highly stable, secure Web-based scheduling and medical guidance infrastructure.",
    },
    stack: ["クリニックサイト", "Web予約", "診療案内", "採用情報", "レスポンシブ"],
    metrics: [
      { label: { ja: "予約", en: "Booking" }, value: "Web" },
      { label: { ja: "対応エリア", en: "Areas" }, value: "4市" },
      { label: { ja: "駅から", en: "From station" }, value: "2min" },
    ],
    hue: "oklch(0.72 0.11 70)",
    image: "/cases/art-asada.png",
  },
];

export type BlogPost = {
  id: string;
  date: string;
  tag: Bi;
  title: Bi;
  profile: Bi;
  comment: Bi;
};

export const blogPosts: BlogPost[] = [
  {
    id: "fb-takahashi",
    date: "2025.11",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "失注寸前だった案件が、単価2倍の主力案件になりました",
      en: "A Near-Lost Project Multiplied My Rates by 2x and Became My Core Income",
    },
    profile: {
      ja: "フリーランスWebデザイナー / 高橋 健二 様",
      en: "Freelance Web Designer / Kenji Takahashi",
    },
    comment: {
      ja: "クライアントから突然『LINEログイン連動の会員サイトを作りたい』と言われ、システムの話に答えられず失注を覚悟していました。諦め半分でDreamChaさんに相談したところ、おかげで商談は大成功し、受注単価はこれまでの2倍に。面倒な技術周りはすべてお任せして、自分はデザインに100%集中できるこの安心感は、一度知ってしまったらもう戻れないですね。",
      en: "When a client requested a member site integrated with LINE login, I almost gave up, fearing I’d lose the project due to my lack of backend knowledge. In desperation, I reached out to DreamCha, and thanks to them, the meeting was a massive success, doubling my contract value. Outsourcing the complex engineering and focusing 100% on design provides an irreplaceable peace of mind I can never go back without.",
    },
  },
  {
    id: "fb-watanabe",
    date: "2026.01",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "決済エラーのトラウマを、完璧な実装で消してもらえました",
      en: "They erased my payment-error trauma with a flawless build",
    },
    profile: {
      ja: "UI/UXデザイナー・ブランドディレクター / 渡辺 茜 様",
      en: "UI/UX Designer & Brand Director / Akane Watanabe",
    },
    comment: {
      ja: "以前、別のエンジニアさんにお願いしたときに、プラグインの不具合で決済エラーが多発して、クライアントから大クレームをいただいた苦い経験があったんです。だから今回のサブスクECのお話が来たときも、内心すごく怖くて。でもDreamChaさんは、私が細部まで作り込んだデザインの世界観を1ミリも崩さないまま、Stripeの決済を裏側で驚くほど堅牢に組み上げてくれました。納品後のバグはゼロ。クライアントにも本当に喜んでいただけて、あのときのトラウマがようやく消えた気がします。",
      en: "I once had a previous engineer's plugin bug cause repeated payment errors and a huge complaint from the client — a bitter memory that stuck with me. So when this subscription-EC job came in, I was honestly scared. But DreamCha kept the world of my meticulously-crafted design perfectly intact and wired Stripe into the backend astonishingly solidly. Zero bugs after launch, and the client was genuinely delighted. That old trauma has finally faded.",
    },
  },
  {
    id: "fb-kobayashi",
    date: "2026.02",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "デザインの意図を「翻訳」してくれるから、崩れが一切ない",
      en: "Because they 'translate' the design intent, nothing breaks",
    },
    profile: {
      ja: "Web制作会社経営・フリーランスデザイナー / 小林 拓也 様",
      en: "Web Studio Owner & Freelance Designer / Takuya Kobayashi",
    },
    comment: {
      ja: "大手不動産会社さんの案件で、システム要件の仕様書があまりに難解で、正直お手上げでした。何より助かったのは、DreamChaの佐藤さんが、私のデザインの意図——余白の取り方や、ユーザーの動線といった細かいこだわりまで——を、開発チームのエンジニアさんたちに完璧に「翻訳」して橋渡ししてくれたことです。だから出来上がったものは見た目の崩れが本当に一切なくて、しかも検索が驚くほど高速。技術部門をまるごと信頼して任せられる、この安心感は他ではちょっと味わえないですね。",
      en: "On a job for a major real-estate company, the requirements spec was so dense I was honestly at a loss. What helped most was that DreamCha's Sato perfectly 'translated' my design intent — right down to the spacing and the user flow I cared about — and bridged it to the engineers. So the result had truly zero visual breakage, and the search was astonishingly fast. Being able to entrust an entire technical department with real confidence is a peace of mind you can't easily find elsewhere.",
    },
  },
  {
    id: "fb-saito",
    date: "2026.04",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "前払い不要の成果報酬だから、ひとりで抱える恐怖から解放されました",
      en: "No upfront cost, so I was freed from the fear of carrying it alone",
    },
    profile: {
      ja: "フリーランスWebディレクター 兼 デザイナー / 斎藤 美咲 様",
      en: "Freelance Web Director & Designer / Misaki Saito",
    },
    comment: {
      ja: "正直、個人で受けるには荷が重すぎるシステム開発案件でした。リアルタイムの予約管理なんて、私ひとりではとても手に負えなくて。でもDreamChaさんが「前払い不要の完全成果報酬（着金ベース）」で入ってくれたので、金銭的な立替リスクはゼロで挑戦できたんです。しかも技術的なリスクの責任は、鈴木さんが100%引き受けてくれて。フリーランスって、こういう大きな案件を目の前にすると本当に孤独で怖いものなんですけど、その恐怖からすっと解放されました。",
      en: "Honestly, it was a system-development job far too heavy for me to take on alone — real-time booking management was simply beyond me. But because DreamCha came in on 'no-prepayment, fully performance-based (payment-triggered)' terms, I could take it on with zero cash-advance risk. And Suzuki shouldered 100% of the technical risk himself. As a freelancer, facing a big job like this can feel genuinely lonely and frightening — and that fear just melted away.",
    },
  },
  {
    id: "fb-ito",
    date: "2026.05",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "「デザインは1ミリも奪わない」— 紙媒体出身の私が、DX市場を開拓できた",
      en: "\"We won't take a millimeter of your design\" — a print designer breaking into the DX market",
    },
    profile: {
      ja: "グラフィック 兼 クリエイティブディレクター / 伊藤 裕太 様",
      en: "Graphic & Creative Director / Yuta Ito",
    },
    comment: {
      ja: "私はもともと紙媒体のデザイン事務所をやっていて、Webのシステムなんて完全に門外漢だったんです。だから最初は正直、エンジニアさんに入ってもらうと、自分のデザインが技術の都合でどんどん作り変えられてしまうんじゃないか、という不安がすごくありました。ところがDreamChaさんは、開口一番『私たちはデザインは1ミリも奪いません』と言い切ってくれて。そして実際、本当にその通りだったんです。STUDIOで作った私のデザインはそのまま活かして、Stripeの決済まわりだけを裏側で静かに繋いでくれました。表には一切出てこず、あくまで裏方に徹してくれる。この絶妙な距離感が、私にとっては何より嬉しかった。おかげさまで、自分の縄張りである「デザイン」を1ミリも手放さないまま、企業のDX案件という、これまで絶対に手の届かなかった超高単価の市場を開拓することができました。ずっと紙の世界にいた自分が、まさかこんな景色を見られるとは思ってもみませんでした。",
      en: "I originally ran a print-design studio, so web systems were completely foreign to me. At first, honestly, I was really anxious that bringing engineers in would mean my design getting reshaped bit by bit to suit technical convenience. But the very first thing DreamCha said was, 'we won't take a millimeter of your design.' And they truly meant it. They kept my STUDIO design exactly as I made it and quietly connected only the Stripe payment side behind the scenes — never stepping into the spotlight, staying strictly in the engine room. That perfect sense of distance meant more to me than anything. Thanks to them, without letting go of a single millimeter of my turf — design — I broke into corporate DX projects, a high-value market I could never have reached. I never dreamed that someone who'd spent his whole career in print would get to see a view like this.",
    },
  },
];
