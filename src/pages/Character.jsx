import { useState } from 'react';
import Reveal from '../components/Reveal';
import VideoModal from '../components/VideoModal';
import { img } from '../lib/asset';

// hero：大圖（與文字並排）；media：下方的動作／型態格；others：只有圖的圖庫
const characters = [
  {
    id: 'parfait', name: '巴非', en: 'Parfait', thumb: 'p4_parfait_idle.webp',
    tags: ['懵懵懂懂', '最乾淨的', '憨呆', '能讀檔重來的勇士'],
    lead: '玩家，就是巴非的靈魂。',
    body: '巴非原本是影子製造、卻缺乏靈魂的失敗貓蠟怪，玩家的到來為它注入了意識。就算死亡，也能「讀檔」回到前一刻——所以好奇心殺不死這隻貓。',
    hero: { src: 'p4_parfait_idle.webp', alt: '巴非待機動畫' },
    media: [
      { src: 'p4_parfait_walk.webp', alt: '巴非行走動畫', label: '行走' },
      { src: 'p4_parfait_jump.webp', alt: '巴非跳躍動畫', label: '跳躍' },
      { src: 'p4_parfait_attack.webp', alt: '巴非攻擊動畫', label: '攻擊' },
      { src: 'p4_parfait_die.webp', alt: '巴非死亡動畫', label: '死亡' },
    ],
  },
  {
    id: 'compal', name: '康帕爾', en: 'Compal', thumb: 'p4_compal_idle.webp',
    tags: ['懦弱的妻奴', '駝背的社畜', '神經質', '兔貓前輩', '中度混亂'],
    lead: '負責帶新人，卻總是心不甘情不願。',
    body: '在工廠待了至少兩年的前輩。懦弱、膽小、神經質——但正因謹小慎微，他才能在這間怪工廠待這麼久。兔子與貓的靈魂在他身上融合，生前的性格與記憶也一併被繼承下來。',
    hero: { src: 'p4_compal_idle.webp', alt: '康帕爾待機動畫' },
  },
  {
    id: 'barret', name: '巴里特', en: 'Barret', thumb: 'p4_barrit_walk.webp',
    tags: ['已經神經病', '瘋了', '有點毛毛的', '熊貓前輩', '重度混亂'],
    lead: '巴非接替的，就是他的工作。',
    body: '待了六個月的員工，生病後被「辭職」。生病前的他能言善道，跟他聊天就像跟鄰家大叔嘮嗑。可隨性的個性讓他接觸了太多影子的事物，靈魂被重度汙染。',
    media: [
      { src: 'p4_barrit_walk.webp', alt: '巴里特行走動畫', label: '行走' },
      { src: 'p4_barrit_die.webp', alt: '巴里特死亡動畫', label: '死亡' },
    ],
  },
  {
    id: 'shadow', name: '影子先生', en: 'Mr. Shadow', thumb: 'p4_Boss.webp',
    tags: ['做事看心情', '高智商輾壓', '紳士', '狡詐', '無善惡和道德觀念', '最傑出影帝'],
    lead: '蠟燭工廠的老闆。巴非的出現，引起了祂的注意。',
    media: [
      { src: 'p4_Boss.webp', alt: '影子先生第一型態', label: 'Form I · 第一型態', desc: '上半身是鱷魚——鱷魚的眼淚是假的，正如祂冷漠無情的性格與精湛演技。下半身是繁多的觸手與森森利齒。' },
      { src: 'p4_Boss_pro.webp', alt: '影子大人第二型態', label: 'Form II · 第二型態', desc: '卸下束縛，隨心所欲。蛇尾、正中央的巨嘴、上方的眼睛，周身環繞神聖的翅膀與光環；每條觸手都嵌著眼珠。' },
    ],
  },
  {
    id: 'failed', name: '貓蠟怪', en: 'Failed Product', thumb: 'p4_product_walk.webp',
    tags: ['空殼', '無意識', '見到就咬', '被控制'],
    lead: '見到會動的東西就咬，一咬一個頭。',
    body: '注入靈魂時反應失敗的空殼。身體處在要融不融的奇怪狀態，頭上的燭火卻仍熊熊燃燒。對巴非來說，是無法溝通、隨時會致命的存在。',
    media: [
      { src: 'p4_product_walk.webp', alt: '貓蠟怪行走動畫', label: '行走' },
      { src: 'p4_product_attack.webp', alt: '貓蠟怪攻擊動畫', label: '攻擊' },
    ],
  },
  {
    id: 'caterpillar', name: '貓毛蟲', en: 'Catandpillar', thumb: 'p4_catandpillar.webp',
    tags: ['勤勞的傳輸線', '神祕通道', '變種怪物', '被控制'],
    lead: '被牠吞下，不一定會死。',
    body: '貓頭、毛毛蟲身，長得不知從何算起。牠只會重複機械性的動作，被放在輸送線上搬運模具。被吞進肚裡，有機率被傳送到工廠任何角落——員工們的捷徑之一。',
    hero: { src: 'p4_catandpillar.webp', alt: '貓毛蟲' },
  },
  {
    id: 'others', name: '工廠同事', en: 'Others', thumb: 'p4_catrow.webp',
    tags: ['變種怪物', '被控制'],
    others: [
      { src: 'p4_catfish.webp', name: '鯊貓 福蘭' },
      { src: 'p4_catrow.webp', name: '貓鴉', en: 'Catrow' },
      { src: 'p4_bgcat.webp', name: '熔爐貓' },
      { src: 'p4_meowse.webp', name: '喵鼠', en: 'Meowse' },
      { src: 'p4_bug.webp', name: '運蠟蟲' },
    ],
  },
];

const Intro = ({ c }) => (
  <div className="flex flex-col gap-5">
    <p className="t-latin">{c.en}</p>
    <h2 className="t-h1">{c.name}</h2>
    <div className="flex flex-wrap gap-2">
      {c.tags.map((t) => <span key={t} className="tag">#{t}</span>)}
    </div>
    {c.lead && <p className="t-lead">{c.lead}</p>}
    {c.body && <p className="t-body">{c.body}</p>}
  </div>
);

const Detail = ({ c }) => {
  const hasDesc = c.media?.some((m) => m.desc);

  return (
    <article className="swap-in flex flex-col gap-12">
      {c.hero ? (
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="stage aspect-square w-full md:w-[46%]">
            <img src={img(c.hero.src)} alt={c.hero.alt} className="h-[80%] w-[80%] object-contain" />
          </div>
          <div className="w-full md:flex-1"><Intro c={c} /></div>
        </div>
      ) : (
        <Intro c={c} />
      )}

      {c.media && (
        <div className={`grid gap-4 ${hasDesc ? 'gap-8 md:grid-cols-2' : c.media.length > 2 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
          {c.media.map((m) => (
            <figure key={m.src} className="m-0 flex flex-col gap-3">
              <div className={`stage w-full ${hasDesc || c.media.length <= 2 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                <img src={img(m.src)} alt={m.alt} loading="lazy" className="h-[80%] w-[80%] object-contain" />
              </div>
              <figcaption className={hasDesc ? 't-overline mt-2' : 't-caption text-center'}>{m.label}</figcaption>
              {m.desc && <p className="t-body">{m.desc}</p>}
            </figure>
          ))}
        </div>
      )}

      {c.others && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {c.others.map((o) => (
            <figure key={o.src} className="m-0 flex flex-col items-center gap-3">
              <div className="stage aspect-square w-full">
                <img src={img(o.src)} alt={o.name} loading="lazy" className="h-[80%] w-[80%] object-contain" />
              </div>
              <figcaption className="flex flex-col items-center gap-0.5 text-center">
                <span className="text-[15px] font-medium text-lead">{o.name}</span>
                {o.en && <span className="font-latin text-xs tracking-[0.14em] text-muted">{o.en}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </article>
  );
};

const Character = () => {
  const [selId, setSelId] = useState('parfait');
  const [videoOpen, setVideoOpen] = useState(false);
  const selected = characters.find((c) => c.id === selId);

  return (
    <>
      <header className="page-container flex flex-col gap-6 pb-12 pt-24 lg:pt-32">
        <Reveal as="p" className="t-overline">Characters</Reveal>
        <Reveal className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <h1 className="t-display">遊戲角色</h1>
          <button type="button" className="btn-ghost" onClick={() => setVideoOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" /></svg>
            角色介紹
          </button>
        </Reveal>
        <Reveal as="p" className="t-lead max-w-[28em]">工廠裡的每一隻，都是影子用貓、蠟與某個靈魂捏出來的。</Reveal>
      </header>

      <Reveal className="page-container pb-14">
        <div role="group" aria-label="選擇角色" className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7">
          {characters.map((c) => {
            const active = c.id === selId;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelId(c.id)}
                className={`flex flex-col items-center gap-2 rounded-2xl border px-2 pb-3.5 pt-4 transition-[transform,border-color] hover:-translate-y-0.5 ${
                  active ? 'border-ember bg-ember/10 text-ember-light' : 'border-wax/10 bg-surface text-[#CFC5B6] hover:border-wax/30'
                }`}
              >
                <img src={img(c.thumb)} alt="" loading="lazy" className="h-16 w-16 object-contain md:h-[88px] md:w-[88px]" />
                <span className={`text-[15px] ${active ? 'font-bold' : 'font-medium'}`}>{c.name}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <section aria-live="polite" className="page-container pb-36">
        <Detail key={selected.id} c={selected} />
      </section>

      {videoOpen && <VideoModal youtubeId="IWzHx1-6hMQ" title="角色介紹影片" onClose={() => setVideoOpen(false)} />}
    </>
  );
};

export default Character;
