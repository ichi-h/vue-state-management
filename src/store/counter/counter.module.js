import { CounterService } from "../../api";
import {
  INCREMENT,
  INITIALIZE,
  RESET
} from "./actions.msg";
import {
  SET_COUNT,
  TOGGLE_LOADING
} from "./mutations.msg";

// 状態の初期値
export const state = {
  count: 0,
  isLoading: false,
};

// Vuexから非同期処理を行うメソッド群
// APIの呼び出しなどが絡む場合は、こちらからmutationsを呼び出す
export const actions = {
  [INITIALIZE]: async ({ commit }) => {
    commit(TOGGLE_LOADING);

    const count = await CounterService.fetchCount();
    commit(SET_COUNT, count);

    commit(TOGGLE_LOADING);
    return count;
  },
  [INCREMENT]: async ({ commit, state }) => {
    commit(TOGGLE_LOADING);

    await CounterService.patchCount(state.count + 1);
    commit(SET_COUNT, state.count + 1);

    commit(TOGGLE_LOADING);
  },
  [RESET]: async ({ commit }) => {
    commit(TOGGLE_LOADING);

    await CounterService.patchCount(0);
    commit(SET_COUNT, 0);

    commit(TOGGLE_LOADING);
  }
};

// 状態の更新
export const mutations = {
  [SET_COUNT]: (state, newCount) => {
    state.count = newCount;
  },
  [TOGGLE_LOADING]: (state) => {
    state.isLoading = !state.isLoading;
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
