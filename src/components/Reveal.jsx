import { useEffect, useRef } from 'react';

// 全站共用一個 IntersectionObserver：元素進入視窗時加上 is-visible，只觸發一次
let observer;
const getObserver = () => {
  if (observer || typeof IntersectionObserver === 'undefined') return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );
  return observer;
};

// 由下往上淡入。as：要輸出的標籤；delay：毫秒，用於同排元素錯開
const Reveal = ({ as = 'div', delay = 0, className = '', style, children, ...rest }) => {
  const Tag = as;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const io = getObserver();
    if (!el) return undefined;
    if (!io) {
      el.classList.add('is-visible');
      return undefined;
    }
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
