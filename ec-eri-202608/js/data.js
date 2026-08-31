/**
 * URBAN CLOSET - 商品・ルックブック・FAQマスターデータ
 * 高解像度かつミニマル・モードなUnsplash画像を使用しています。
 */

// 12商品のデータ定義
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "オーバーサイズTシャツ",
    enName: "Oversized Heavyweight T-Shirt",
    category: "TOPS",
    price: 6500,
    isNew: true,
    description: "極上の肌触りと適度なハリ感を持つ、ヘビーウェイトコットンを使用したオーバーサイズTシャツ。計算されたドロップショルダーとボックスシルエットが、一枚で洗練された都会的なスタイルを演出します。",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80", // 白Tフロント
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80", // 黒Tアングル
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80", // 着用アングル
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=1000&q=80"  // ディテール
    ],
    colors: [
      { name: "White", hex: "#FFFFFF", border: "#E5E7EB" },
      { name: "Black", hex: "#111111", border: "#111111" },
      { name: "Gray", hex: "#9CA3AF", border: "#9CA3AF" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", length: "69cm", width: "56cm", shoulder: "52cm", sleeve: "23cm" },
      { size: "M", length: "72cm", width: "59cm", shoulder: "55cm", sleeve: "24cm" },
      { size: "L", length: "75cm", width: "62cm", shoulder: "58cm", sleeve: "25cm" },
      { size: "XL", length: "78cm", width: "65cm", shoulder: "61cm", sleeve: "26cm" }
    ],
    details: [
      "素材: コットン100% (280g/m² ヘビーオンス)",
      "シルエット: リラックス・ボックスフィット",
      "原産国: 日本",
      "洗濯方法: 洗濯機洗い可 (ネット使用推奨)"
    ]
  },
  {
    id: 2,
    name: "ワイドテーパードパンツ",
    enName: "Wide Tapered Pleated Trousers",
    category: "BOTTOMS",
    price: 12000,
    isNew: true,
    description: "上品なドレープ感と美しい落ち感が特徴の2タックテーパードパンツ。ウエスト周りにはゆとりを持たせつつ、裾に向かって緩やかに絞り込むことで、どんなシューズとも抜群の相性を誇ります。",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Black", hex: "#111111", border: "#111111" },
      { name: "Charcoal", hex: "#374151", border: "#374151" },
      { name: "Light Gray", hex: "#D1D5DB", border: "#D1D5DB" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", waist: "76cm", hip: "106cm", rise: "31cm", inseam: "68cm" },
      { size: "M", waist: "80cm", hip: "110cm", rise: "32cm", inseam: "70cm" },
      { size: "L", waist: "84cm", hip: "114cm", rise: "33cm", inseam: "72cm" },
      { size: "XL", waist: "88cm", hip: "118cm", rise: "34cm", inseam: "74cm" }
    ],
    details: [
      "素材: ポリエステル68%, レーヨン28%, ポリウレタン4%",
      "ウエスト: ベルトループ付き、サイドゴム仕様",
      "原産国: 日本",
      "洗濯方法: ドライクリーニングまたは手洗い"
    ]
  },
  {
    id: 3,
    name: "リネンシャツ",
    enName: "Relaxed French Linen Shirt",
    category: "TOPS",
    price: 9800,
    isNew: false,
    description: "厳選されたフレンチリネンを贅沢に使用した、清涼感あふれる長袖シャツ。洗いざらしのような自然なシワ感がリラックスしたエレガンスを醸し出します。羽織としてもインナーとしても重宝する一着。",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "White", hex: "#FFFFFF", border: "#E5E7EB" },
      { name: "Natural Beige", hex: "#E5DCCB", border: "#D5CCBB" },
      { name: "Navy Black", hex: "#1F2937", border: "#1F2937" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", length: "73cm", width: "57cm", shoulder: "49cm", sleeve: "60cm" },
      { size: "M", length: "75cm", width: "60cm", shoulder: "51cm", sleeve: "61.5cm" },
      { size: "L", length: "77cm", width: "63cm", shoulder: "53cm", sleeve: "63cm" },
      { size: "XL", length: "79cm", width: "66cm", shoulder: "55cm", sleeve: "64.5cm" }
    ],
    details: [
      "素材: 麻 (リネン) 100%",
      "ボタン: 高級本貝ボタン使用",
      "原産国: 日本",
      "洗濯方法: 洗濯機洗い可 (日陰干し推奨)"
    ]
  },
  {
    id: 4,
    name: "コーチジャケット",
    enName: "Minimalist Urban Coach Jacket",
    category: "OUTERWEAR",
    price: 18000,
    isNew: true,
    description: "マットな質感の高密度ナイロンタフタを使用したミニマルコーチジャケット。無駄を徹底的に排除した比翼仕立てのスナップボタンと、防風・撥水性能を兼ね備えた都会派アウターです。",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Black", hex: "#111111", border: "#111111" },
      { name: "Sage Green", hex: "#78866B", border: "#78866B" },
      { name: "Dark Slate", hex: "#334155", border: "#334155" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", length: "70cm", width: "61cm", shoulder: "53cm", sleeve: "61cm" },
      { size: "M", length: "72cm", width: "64cm", shoulder: "55cm", sleeve: "62.5cm" },
      { size: "L", length: "74cm", width: "67cm", shoulder: "57cm", sleeve: "64cm" },
      { size: "XL", length: "76cm", width: "70cm", shoulder: "59cm", sleeve: "65.5cm" }
    ],
    details: [
      "素材: 表地 ナイロン100% / 裏地 ポリエステル100%",
      "機能: 耐久撥水加工、防風仕様、裾ドローコード付き",
      "原産国: 日本",
      "洗濯方法: 手洗いまたはドライクリーニング"
    ]
  },
  {
    id: 5,
    name: "クロップドフーディ",
    enName: "Structured Cropped Pullover Hoodie",
    category: "TOPS",
    price: 11000,
    isNew: false,
    description: "立体的な立ち上がりのフードと、すっきりとした丈感が絶妙なバランスを生むプルオーバーフーディ。ハイウエストボトムスやワイドパンツとのレイヤードで、モダンなシルエットを完成させます。",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Heather Gray", hex: "#9CA3AF", border: "#9CA3AF" },
      { name: "Off White", hex: "#F3F4F6", border: "#E5E7EB" },
      { name: "Black", hex: "#111111", border: "#111111" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", length: "58cm", width: "58cm", shoulder: "54cm", sleeve: "57cm" },
      { size: "M", length: "61cm", width: "61cm", shoulder: "57cm", sleeve: "58.5cm" },
      { size: "L", length: "64cm", width: "64cm", shoulder: "60cm", sleeve: "60cm" },
      { size: "XL", length: "67cm", width: "67cm", shoulder: "63cm", sleeve: "61.5cm" }
    ],
    details: [
      "素材: コットン85%, ポリエステル15% (裏毛裏パイル)",
      "フード: 二重仕立てで美しい立体感をキープ",
      "原産国: 日本",
      "洗濯方法: 洗濯機洗い可"
    ]
  },
  {
    id: 6,
    name: "カーゴパンツ",
    enName: "Modern Utility Cargo Trousers",
    category: "BOTTOMS",
    price: 14500,
    isNew: false,
    description: "ミリタリーの機能性とモードの洗練さを融合したモダンカーゴパンツ。フラットなマチなしサイドポケットにより、ボリューム感を抑えつつスタイリッシュなシルエットを実現しました。",
    images: [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Black", hex: "#111111", border: "#111111" },
      { name: "Olive Gray", hex: "#4B5563", border: "#4B5563" },
      { name: "Sand", hex: "#D4CEBE", border: "#C4BEAE" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", waist: "78cm", hip: "108cm", rise: "30cm", inseam: "69cm" },
      { size: "M", waist: "82cm", hip: "112cm", rise: "31cm", inseam: "71cm" },
      { size: "L", waist: "86cm", hip: "116cm", rise: "32cm", inseam: "73cm" },
      { size: "XL", waist: "90cm", hip: "120cm", rise: "33cm", inseam: "75cm" }
    ],
    details: [
      "素材: コットン70%, ナイロン30% (リップストップ生地)",
      "裾仕様: アジャストスナップ付き（絞り調整可能）",
      "原産国: 日本",
      "洗濯方法: 洗濯機洗い可"
    ]
  },
  {
    id: 7,
    name: "ドローストリングバッグ",
    enName: "Leather-Trim Drawstring Pouch",
    category: "ACCESSORIES",
    price: 5500,
    isNew: true,
    description: "撥水マットナイロンと上質な牛革コードを組み合わせた、身軽な都市生活に最適なドローストリングバッグ。スマートフォンやミニウォレットが収まるコンパクトなサイズ感です。",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Matte Black", hex: "#111111", border: "#111111" },
      { name: "Concrete Gray", hex: "#6B7280", border: "#6B7280" },
      { name: "Ivory", hex: "#F3F4F6", border: "#E5E7EB" }
    ],
    sizes: ["FREE"],
    sizeGuide: [
      { size: "FREE", width: "22cm", height: "26cm", depth: "8cm", strap: "最長120cm (調節可)" }
    ],
    details: [
      "素材: 本体 ナイロン100% / コード部 本革(牛革)",
      "仕様: 内側カードスロットポケット付き、撥水加工",
      "原産国: 日本"
    ]
  },
  {
    id: 8,
    name: "ステンカラーコート",
    enName: "Single-Breasted Balmacaan Coat",
    category: "OUTERWEAR",
    price: 28000,
    isNew: true,
    description: "計算し尽くされたAラインシルエットが美しい、タイムレスなステンカラーコート。高密度ギャバジン素材による上品な光沢と防風性を兼ね備え、オンオフ問わず長く着用いただけます。",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Charcoal Black", hex: "#18181B", border: "#18181B" },
      { name: "Dark Navy", hex: "#1E293B", border: "#1E293B" },
      { name: "Light Beige", hex: "#E2D9C8", border: "#D2C9B8" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", length: "106cm", width: "63cm", shoulder: "54cm", sleeve: "59cm" },
      { size: "M", length: "109cm", width: "66cm", shoulder: "56cm", sleeve: "60.5cm" },
      { size: "L", length: "112cm", width: "69cm", shoulder: "58cm", sleeve: "62cm" },
      { size: "XL", length: "115cm", width: "72cm", shoulder: "60cm", sleeve: "63.5cm" }
    ],
    details: [
      "素材: 表地 コットン65%, ポリエステル35% / 裏地 キュプラ100%",
      "仕様: ラグランスリーブ、比翼仕立て、センターベント",
      "原産国: 日本",
      "洗濯方法: ドライクリーニング"
    ]
  },
  {
    id: 9,
    name: "リブニットベスト",
    enName: "Fine Gauge Ribbed Knit Vest",
    category: "TOPS",
    price: 8800,
    isNew: false,
    description: "ハイゲージで編み立てたクリーンなリブニットベスト。深めのVネックラインとサイドスリットにより、シャツやロンTとの重ね着が洗練された印象に仕上がります。",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Charcoal Gray", hex: "#374151", border: "#374151" },
      { name: "Cream White", hex: "#F9FAFB", border: "#E5E7EB" },
      { name: "Deep Navy", hex: "#0F172A", border: "#0F172A" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", length: "64cm", width: "54cm", shoulder: "45cm", sleeve: "—" },
      { size: "M", length: "66cm", width: "57cm", shoulder: "47cm", sleeve: "—" },
      { size: "L", length: "68cm", width: "60cm", shoulder: "49cm", sleeve: "—" },
      { size: "XL", length: "70cm", width: "63cm", shoulder: "51cm", sleeve: "—" }
    ],
    details: [
      "素材: コットン60%, アクリル40% (抗ピリング加工)",
      "仕様: 深めのサイドスリット、裾リブ編み",
      "原産国: 日本",
      "洗濯方法: 手洗い推奨"
    ]
  },
  {
    id: 10,
    name: "ナイロンショーツ",
    enName: "Active Nylon Easy Shorts",
    category: "BOTTOMS",
    price: 7200,
    isNew: false,
    description: "速乾性と耐久性に優れたタスランナイロンを採用したイージーショーツ。適度な膝上丈とリラックスした裾幅で、都会のストリートからアクティブなシーンまでシームレスに対応します。",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Black", hex: "#111111", border: "#111111" },
      { name: "Steel Blue", hex: "#475569", border: "#475569" },
      { name: "Khaki", hex: "#71717A", border: "#71717A" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", waist: "74〜84cm", hip: "104cm", rise: "28cm", inseam: "16cm" },
      { size: "M", waist: "78〜88cm", hip: "108cm", rise: "29cm", inseam: "17cm" },
      { size: "L", waist: "82〜92cm", hip: "112cm", rise: "30cm", inseam: "18cm" },
      { size: "XL", waist: "86〜96cm", hip: "116cm", rise: "31cm", inseam: "19cm" }
    ],
    details: [
      "素材: ナイロン100% (撥水・UVカット加工)",
      "仕様: ウエストゴム＆ドローコード、キーフック用Dカン付き",
      "原産国: 日本",
      "洗濯方法: 洗濯機洗い可"
    ]
  },
  {
    id: 11,
    name: "ロゴキャップ",
    enName: "Embroidered Minimalist 6-Panel Cap",
    category: "ACCESSORIES",
    price: 4800,
    isNew: true,
    description: "浅すぎず深すぎない絶妙なクラウン形状にこだわった6パネルキャップ。フロントには同色トーンの極小ブランドロゴを刺繍。ミニマルなスタイリングのさりげないアクセントに。",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Black", hex: "#111111", border: "#111111" },
      { name: "Washed Navy", hex: "#1E293B", border: "#1E293B" },
      { name: "Ecru", hex: "#F3F4F6", border: "#E5E7EB" }
    ],
    sizes: ["FREE"],
    sizeGuide: [
      { size: "FREE", head: "56〜61cm (金属アジャスター調節)", depth: "12cm", brim: "7.2cm" }
    ],
    details: [
      "素材: コットン100% (ウォッシュドツイル加工)",
      "仕様: バックストラップメタルバックル付き",
      "原産国: 日本"
    ]
  },
  {
    id: 12,
    name: "レイヤードロンT",
    enName: "Double-Layered Long Sleeve Tee",
    category: "TOPS",
    price: 7800,
    isNew: false,
    description: "裾と袖口からわずかにインナーが覗くレイヤード風デザインの長袖カットソー。1枚で完成されたスタイリングが叶い、上質なコーマ糸ならではの滑らかな着心地が魅力です。",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "White / Gray", hex: "#E5E7EB", border: "#D1D5DB" },
      { name: "Black / Charcoal", hex: "#18181B", border: "#18181B" },
      { name: "Slate / White", hex: "#64748B", border: "#64748B" }
    ],
    sizes: ["S", "M", "L", "XL"],
    sizeGuide: [
      { size: "S", length: "72cm", width: "57cm", shoulder: "53cm", sleeve: "60cm" },
      { size: "M", length: "75cm", width: "60cm", shoulder: "56cm", sleeve: "61.5cm" },
      { size: "L", length: "78cm", width: "63cm", shoulder: "59cm", sleeve: "63cm" },
      { size: "XL", length: "81cm", width: "66cm", shoulder: "62cm", sleeve: "64.5cm" }
    ],
    details: [
      "素材: コットン100% (60/2 精紡コーマ糸)",
      "シルエット: リラックスセミワイド",
      "原産国: 日本",
      "洗濯方法: 洗濯機洗い可"
    ]
  }
];

// ルックブック用ギャラリーデータ（10枚）
const LOOKBOOK_DATA = [
  {
    id: 1,
    title: "LOOK 01 - URBAN MINIMALISM",
    desc: "Balmacaan Coat & Wide Tapered Trousers",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    aspect: "tall"
  },
  {
    id: 2,
    title: "LOOK 02 - MONOCHROME SILHOUETTE",
    desc: "Oversized Heavyweight T-Shirt & Cargo Trousers",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85",
    aspect: "square"
  },
  {
    id: 3,
    title: "LOOK 03 - TEXTURE & DRAPE",
    desc: "French Linen Shirt in Motion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    aspect: "wide"
  },
  {
    id: 4,
    title: "LOOK 04 - CITY LIGHTS & SHADOWS",
    desc: "Coach Jacket & Drawstring Pouch",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85",
    aspect: "tall"
  },
  {
    id: 5,
    title: "LOOK 05 - STRUCTURED RELAX",
    desc: "Cropped Pullover Hoodie & Wide Trousers",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
    aspect: "tall"
  },
  {
    id: 6,
    title: "LOOK 06 - MODERN ESSENTIALS",
    desc: "Fine Gauge Ribbed Knit Vest Layering",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
    aspect: "wide"
  },
  {
    id: 7,
    title: "LOOK 07 - GENDERLESS FORM",
    desc: "Double-Layered Long Sleeve Tee & Logo Cap",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1200&q=85",
    aspect: "square"
  },
  {
    id: 8,
    title: "LOOK 08 - TIMELESS TRANSITION",
    desc: "Active Nylon Easy Shorts with Oversized Coat",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85",
    aspect: "tall"
  },
  {
    id: 9,
    title: "LOOK 09 - ARCHITECTURAL LINE",
    desc: "Tailored Structure for Urban Lifestyle",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85",
    aspect: "wide"
  },
  {
    id: 10,
    title: "LOOK 10 - SPRING LIGHT",
    desc: "Refined Simplicity, Clean Tone",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85",
    aspect: "tall"
  }
];

// よくある質問 (FAQ) データ（5項目）
const FAQ_DATA = [
  {
    question: "商品のサイズ選びについて相談できますか？",
    answer: "はい、各商品ページに詳細な寸法表（サイズガイド）を掲載しております。また、お客様の身長・体型やお好みの着用感に合わせたサイズ提案をご希望の場合は、お問い合わせフォームまたは公式LINEよりお気軽にご相談ください。専任スタイリストがご案内いたします。"
  },
  {
    question: "ユニセックス（男女兼用）商品のサイズ感はどのようになっていますか？",
    answer: "URBAN CLOSETの全アイテムはジェンダーレスを前提に設計されています。女性の方にはSまたはMサイズが程よいオーバーサイズ感、男性の方にはM〜XLサイズが標準〜ゆったりとしたフィット感としてご愛用いただいております。"
  },
  {
    question: "ギフトラッピングには対応していますか？",
    answer: "はい、環境に配慮した上質なマットブラックのオリジナルギフトボックス（有料: ¥550）をご用意しております。メッセージカードを添えてのお届けも可能です。ご購入手続き時のオプションにてご指定いただけます。"
  },
  {
    question: "注文から発送までどのくらいかかりますか？",
    answer: "通常ご注文完了から1〜3営業日以内に発送いたします（土日祝・年末年始を除く）。発送完了後、お荷物の追跡番号を記載したメールをお送りいたします。予約商品については各商品ページに記載の発送目安時期をご確認ください。"
  },
  {
    question: "返品・サイズ交換は可能ですか？",
    answer: "商品到着後7日以内であれば、未使用（タグ付き）の状態に限りサイズ交換またはご返品を承ります。お問い合わせフォームより注文番号とご希望の内容をお知らせください。※セール品や衛生商品など一部対象外商品がございます。"
  }
];
