// public/ 底下的靜態檔路徑（部署在 /CatsPaw-WY/ 子路徑，必須加上 BASE_URL）
export const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;
export const video = (name) => `${import.meta.env.BASE_URL}videos/${name}`;
