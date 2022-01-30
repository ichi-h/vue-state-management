import { CounterService } from "../../api";
import {
  COUNTER__INCREMENT,
  COUNTER__INITIALIZE,
  COUNTER__RESET
} from "./actions.msg";
import {
  COUNTER__SET_COUNT
} from "./mutations.msg";

// 状態の初期値
export const state = {
  count: 0,
};

// Vuexから非同期処理を行うメソッド群
// APIの呼び出しなどが絡む場合は、こちらからmutationsを呼び出す
export const actions = {
  [COUNTER__INITIALIZE]: async ({ commit }) => {
    const count = await CounterService.fetchCount();
    commit(COUNTER__SET_COUNT, count);
    return count;
  },
  [COUNTER__INCREMENT]: async ({ commit, state }) => {
    await CounterService.patchCount(state.count + 1);
    commit(COUNTER__SET_COUNT, state.count + 1);
  },
  [COUNTER__RESET]: async ({ commit }) => {
    await CounterService.patchCount(0);
    commit(COUNTER__SET_COUNT, 0);
  }
};

// 状態の更新
export const mutations = {
  [COUNTER__SET_COUNT]: (state, newCount) => {
    state.count = newCount;
  }
};

// 状態の加工
// 例えば、ソート等の加工を状態に行ってから返却したい場合などに使う
// 今回のような、状態をそのまま返却するような場合は必要ない
// const getters = {
//   count: (state) => {
//     return state.count;
//   },
// };

export default {
  state,
  actions,
  mutations,
};
