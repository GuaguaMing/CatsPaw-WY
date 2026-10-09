import Reveal from '../components/Reveal';
import { img } from '../lib/asset';

// 第一關的分區（順序依 Figma 稿）；tall：直式圖，與文字左右並排
const stage1 = [
  { no: '1.1', image: 'scene_1-1.webp', title: '起點：電梯', text: '從電梯出發。第一個佈告欄教你左右移動，第二個說明如何向上跳、如何與其他角色對話——先熟悉基礎操作。' },
  { no: '1.2', image: 'scene_1-2.webp', title: '工作地點', text: '被貓毛蟲吃掉再吐出來後，來到工作地點。佈告欄教你吐蠟工作：灌滿八次模具，門才會打開。' },
  { no: '1.3', image: 'scene_1-3.webp', title: '喵鼠窩', text: '佈告欄教你用爪擊攻擊敵人。這裡滿是喵鼠，必須全部擊殺才能前進。', tall: true },
  { no: '1.4', image: 'scene_1-4.webp', title: '運輸場', text: '工廠的運輸場。要同時用上吐蠟和爪擊，打敗貓蠟怪才能繼續。' },
  { no: '1.6', image: 'scene_1-6.webp', title: '兩扇門', text: '兩扇可以互動的門：Exit 通往樓梯間，電梯則通往第二關。' },
  { no: '1.5', image: 'scene_1-5.webp', title: '樓梯間', text: '從 Exit 門進入的樓梯間。一進去就回不了頭，只能往下走——然後掉下去。', tall: true },
];

const gallery = [
  'board_rules.webp', 'board_circle.webp', 'board_poison.webp',
  'board_noentry2.webp', 'board_noentry.webp', 'board_stones.webp',
  'board_obstacle.webp', 'board_mold.webp', 'board_key.webp',
];

const StageHeading = ({ no, title }) => (
  <Reveal className="flex flex-col gap-3">
    <p className="t-overline">Stage 0{no}</p>
    <h2 className="t-h1">{title}</h2>
  </Reveal>
);

const SubScene = ({ s }) =>
  s.tall ? (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
      <Reveal className="w-full max-w-[320px] md:w-[42%] md:max-w-none">
        <img src={img(s.image)} alt={`場景 ${s.no}：${s.title}`} loading="lazy" decoding="async" className="w-full rounded-xl" />
      </Reveal>
      <Reveal delay={100} className="flex w-full flex-col gap-3 md:flex-1">
        <p className="font-latin text-sm tracking-[0.2em] text-ember">{s.no}</p>
        <h3 className="t-h2">{s.title}</h3>
        <p className="t-body">{s.text}</p>
      </Reveal>
    </div>
  ) : (
    <div className="flex flex-col gap-6">
      <Reveal className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
        <div className="flex items-baseline gap-4 md:w-[280px] md:shrink-0">
          <p className="font-latin text-sm tracking-[0.2em] text-ember">{s.no}</p>
          <h3 className="t-h2">{s.title}</h3>
        </div>
        <p className="t-body">{s.text}</p>
      </Reveal>
      <Reveal>
        <img src={img(s.image)} alt={`場景 ${s.no}：${s.title}`} loading="lazy" decoding="async" className="w-full rounded-xl" />
      </Reveal>
    </div>
  );

const Scene = () => (
  <>
    {/* 地圖主視覺 */}
    <section className="relative overflow-hidden">
      <img src={img('scene_map.webp')} alt="Cat's Paw 世界地圖線稿" fetchPriority="high" className="block aspect-[16/9] w-full object-cover md:aspect-[1920/1073]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0D0B0C_0%,transparent_45%)]" />
      <div className="page-container absolute inset-x-0 bottom-0 flex flex-col gap-4 pb-8 md:pb-16">
        <Reveal as="p" className="t-overline">Scenes</Reveal>
        <Reveal as="h1" className="t-display">遊戲場景</Reveal>
      </div>
    </section>

    <div className="page-container flex flex-col gap-24 pb-32 pt-16 lg:gap-32 lg:pt-24">
      {/* 第一關 */}
      <section className="flex flex-col gap-16 lg:gap-24">
        <div className="flex flex-col gap-5">
          <StageHeading no={1} title="蠟燭工廠" />
          <Reveal as="p" className="t-lead max-w-[28em]">巴非上班的地方。這一關會一步步教會你移動、吐蠟與爪擊。</Reveal>
        </div>
        {stage1.map((s) => <SubScene key={s.no} s={s} />)}
      </section>

      {/* 第二關 */}
      <section className="flex flex-col gap-8">
        <StageHeading no={2} title="海下的拉萊耶都市" />
        <Reveal>
          <img src={img('scene_2-1.webp')} alt="第二關場景：石造都市" loading="lazy" decoding="async" className="w-full rounded-xl" />
        </Reveal>
      </section>

      {/* 第三關 */}
      <section className="flex flex-col gap-8">
        <StageHeading no={3} title="影子裡的實驗室" />
        <Reveal>
          <img src={img('scene_3-1.webp')} alt="第三關場景：實驗室走廊" loading="lazy" decoding="async" className="w-full rounded-xl" />
        </Reveal>
        <Reveal>
          <img src={img('scene_3-3.webp')} alt="第三關場景：實驗室深處" loading="lazy" decoding="async" className="w-full rounded-xl" />
        </Reveal>
      </section>

      {/* 遊戲畫面 */}
      <section className="flex flex-col gap-8">
        <Reveal className="flex flex-col gap-3">
          <p className="t-overline">Gallery</p>
          <h2 className="t-h1">更多遊戲畫面</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((g, i) => (
            <Reveal key={g} delay={(i % 3) * 80}>
              <img src={img(g)} alt="遊戲畫面" loading="lazy" decoding="async" className="aspect-[465/260] w-full rounded-lg object-cover" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default Scene;
