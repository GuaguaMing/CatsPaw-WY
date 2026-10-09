import Reveal from '../components/Reveal';
import VideoPlayer from '../components/VideoPlayer';
import { img, video } from '../lib/asset';

const controls = [
  { image: 'P3_001.webp', alt: '左搖桿左右推動示意', keys: [{ key: '左搖桿', action: '左右移動', wide: true }] },
  { image: 'P3_002.webp', alt: 'B 鍵跳躍、Y 鍵對話示意', keys: [{ key: 'B', action: '向上跳躍' }, { key: 'Y', action: '互動、與角色對話' }] },
  { image: 'P3_003.webp', alt: 'X 鍵爪擊、A 鍵吐蠟示意', keys: [{ key: 'X', action: '爪擊' }, { key: 'A', action: '吐蠟攻擊' }] },
];

const tips = [
  { title: '點亮火把', text: '對著火把吐蠟，讓四周亮起來，才不會在黑暗中被偷襲。' },
  { title: '彈跳泡泡', text: '管線漏出的乾冰加上蠟，能做成彈跳泡泡，跳到更高的地方。' },
  { title: '讀檔重來', text: '死了也沒關係。巴非能讀檔，回到死亡前的那一刻。' },
];

const Guide = () => (
  <>
    <header className="page-container flex flex-col gap-6 pb-16 pt-24 lg:pt-32">
      <Reveal as="p" className="t-overline">How to Play</Reveal>
      <Reveal as="h1" className="t-display">遊戲教學</Reveal>
      <Reveal as="p" className="t-lead max-w-[28em]">移動、跳躍、爪擊、吐蠟。五個按鍵，就能逃出工廠。</Reveal>
    </header>

    <section className="page-container pb-24 lg:pb-28">
      <Reveal as="h2" className="t-h2 mb-8">手把按鍵說明</Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {controls.map((c, i) => (
          <Reveal key={c.image} delay={i * 80} className="card flex flex-col gap-6 p-8">
            <img src={img(c.image)} alt={c.alt} loading="lazy" className="h-40 w-full object-contain" />
            <div className="flex flex-col gap-4">
              {c.keys.map((k) => (
                <div key={k.key} className="flex items-center gap-4">
                  <span
                    className={`inline-flex h-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ember text-ember-light ${
                      k.wide ? 'px-3.5 text-sm font-medium' : 'w-10 font-latin text-base font-bold'
                    }`}
                  >
                    {k.key}
                  </span>
                  <span className="t-h3">{k.action}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="page-container pb-24 lg:pb-28">
      <Reveal as="h2" className="t-h2 mb-8">蠟的用法</Reveal>
      <div className="grid gap-10 md:grid-cols-3">
        {tips.map((t, i) => (
          <Reveal key={t.title} delay={i * 80} className="flex flex-col gap-3 border-t-2 border-ember pt-5">
            <p className="t-h3">{t.title}</p>
            <p className="t-body">{t.text}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="page-container pb-36">
      <Reveal as="h2" className="t-h2 mb-8">教學影片</Reveal>
      <Reveal>
        <VideoPlayer src={video("Cat's_Paw_howToPlay.mp4")} poster={img('A_mainview.webp')} label="教學影片" />
      </Reveal>
    </section>
  </>
);

export default Guide;
