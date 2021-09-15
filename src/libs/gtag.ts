// lib/gtag.ts
export const GA_TRACKING_ID = "G-TN52BHT14E";

// PV 測定
export const pageview = (url: string): void => {
  // GA_TRACKING_ID が設定されていない場合は、処理終了
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
