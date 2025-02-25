// 涉及 Diff 算法
// 老的是 Array --> 新的是 Array

import { ref, h } from "../../lib/diy-vue.esm.js";

// 3. 新的比老的长
//     创建新的
// 右侧
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
const prevChildren = [h("p", { key: "A" }, "A"), h("p", { key: "B" }, "B")];
const nextChildren = [
  h("p", { key: "C" }, "C"),
  h("p", { key: "A" }, "A"),
  h("p", { key: "B" }, "B"),
];

export default {
  name: "ArrayToArray3_2",
  setup() {
    const isChange = ref(false);
    window.isChange = isChange;

    const toggleClick = () => {
      isChange.value = !isChange.value;
    };

    return {
      isChange,
      toggleClick,
    };
  },
  render() {
    const self = this;

    return h("div", {}, [
      h("div", {}, "Tips: 新的比老的长(右侧)，创建新的"),
      h("div", { class: "red" }, "prev: (a b)"),
      h("div", { class: "blue" }, "next: c (a b)"),
      self.isChange === true
        ? h("div", {}, nextChildren)
        : h("div", {}, prevChildren),
      h("button", { onClick: this.toggleClick }, "3.2. 新的比老的长(右侧)"),
    ]);
  },
};
