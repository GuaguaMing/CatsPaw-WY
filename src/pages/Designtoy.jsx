import Reveal from '../components/Reveal';
import { img } from '../lib/asset';

const photos = ['1111', '1112', '1113', '1117', '1115', '1114', '1118', '1116'];

const exhibitions = [
  { date: '2024/08', name: '第 2 屆 玩具生活節 2nd Designer Toy Life' },
  { date: '2024/06', name: 'Toy Taste 玩具品味展－機器 · 人－玩具的綠界迷失樂園' },
  { date: '2024/05', name: '台中怪獸老爹玩具展：異世界學園祭' },
  { date: '2024/03', name: '創作聯會 · 創作者宇宙篇' },
  { date: '2024/02', name: 'Jinart 創作者博覽會' },
  { date: '2024/01', name: '台南國際玩具博覽會－玩具大選 TOY SELECT' },
  { date: '2023/11', name: '開拓模型祭 PF39 x RF11' },
  { date: '2023/08', name: '玩具生活節 Designer Toy Life' },
  { date: '2023/06', name: '第三屆 Toy Taste 玩具品味展' },
  { date: '2023/05', name: '第 42 屆新一代設計展' },
];

const Designtoy = () => (
  <>
    <header className="page-container flex flex-wrap items-end justify-between gap-8 pb-16 pt-24 lg:pt-32">
      <div className="flex max-w-[40em] flex-col gap-6">
        <Reveal as="p" className="t-overline">Designer Toy</Reveal>
        <Reveal as="h1" className="t-display">遊戲公仔</Reveal>
        <Reveal as="p" className="t-lead">名為「歪」的平行宇宙裡，一間蠟燭工廠正賣力營運中。</Reveal>
        <Reveal as="p" className="t-body">工廠裡的勞工自產自銷、自給自足，久而久之形成了獨有的生活環境。這些勞工是「貓咪」與「蠟燭」的合成生命體——「貓蠟怪」。</Reveal>
      </div>
      <Reveal>
        <a href="https://www.instagram.com/wywy_studio/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <img src={img('A_community_ins.png')} alt="" className="h-5 w-5" />
          在 Instagram 看更多
        </a>
      </Reveal>
    </header>

    <section className="page-container pb-24 lg:pb-32">
      <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
        {photos.map((p, i) => (
          <Reveal key={p} delay={(i % 4) * 80}>
            <img src={img(`toy_${p}.webp`)} alt="貓蠟怪設計師公仔" loading="lazy" decoding="async" className="aspect-square w-full rounded-xl object-cover" />
          </Reveal>
        ))}
      </div>
    </section>

    <section className="page-container pb-36">
      <Reveal className="mb-10 flex flex-col gap-3">
        <p className="t-overline">Exhibitions</p>
        <h2 className="t-h1">參展紀錄</h2>
      </Reveal>
      <ol className="m-0 list-none p-0">
        {exhibitions.map((e) => (
          <Reveal as="li" key={e.date + e.name} className="flex flex-col gap-1 border-t border-wax/[0.08] py-5 sm:flex-row sm:gap-10">
            <span className="w-24 shrink-0 font-latin text-sm tracking-[0.12em] text-ember">{e.date}</span>
            <span className="text-base leading-relaxed text-lead">{e.name}</span>
          </Reveal>
        ))}
      </ol>
    </section>
  </>
);

export default Designtoy;
