// public/ 底下的靜態檔路徑（部署在 /CatsPaw-WY/ 子路徑，必須加上 BASE_URL）
export const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

// YouTube 嵌入網址（nocookie 網域，不在使用者按播放前寫入追蹤 cookie）
export const youtubeEmbed = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
