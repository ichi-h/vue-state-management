import axios from "axios";

// apiを用途ごとにまとめる
// 各メソッドはHTTP Requestの送出/HTTP Responseの返却を担当
// データ加工等のその他の処理は別メソッドに譲る
export const CounterService = {
  fetchCount: () => {
    return new Promise((resolve) => {
      axios.get("/api/fetch_count")
        .then((res) => resolve(res.data.count));
    });
  },
  patchCount: async (newCount) => {
    await axios.patch("/api/patch_count", { count: newCount });
  },
};
