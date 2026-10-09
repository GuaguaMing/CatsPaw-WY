import { img } from '../lib/asset';

const socials = [
  { href: 'https://www.instagram.com/wywy_studio/', icon: 'A_community_ins.png', label: 'Wywy Studio 的 Instagram' },
  { href: 'https://www.youtube.com/@wywy_studio', icon: 'A_community_yt.png', label: 'Wywy Studio 的 YouTube' },
];

const Footer = () => (
  <footer className="w-full bg-ground">
    {/* 主視圖：上下漸層融入底色 */}
    <div className="relative h-[clamp(320px,46vw,680px)] w-full overflow-hidden">
      <img
        src={img('A_mainview.webp')}
        alt=""
        loading="lazy"
        decoding="async"
        className="block h-full w-full object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0D0B0C_0%,transparent_28%,transparent_62%,#0D0B0C_100%)]" />
    </div>

    <div className="page-container flex flex-wrap items-center justify-between gap-5 pb-10 pt-6">
      <img src={img('A_producttag12.png')} alt="遊戲分級：輔 12 級" className="h-16 w-16" />
      <p className="m-0 font-latin text-sm tracking-[0.2em] text-muted">© 2025 WYGAMESTUDIO</p>
      <div className="flex items-center gap-3">
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b1617] shadow-[inset_3px_3px_8px_rgba(255,255,255,0.12),inset_-3px_-4px_8px_rgba(255,159,115,0.3)] transition-transform hover:scale-105"
          >
            <img src={img(s.icon)} alt="" className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
