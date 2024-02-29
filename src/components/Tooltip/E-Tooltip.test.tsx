import { mount } from "@vue/test-utils";
import ETooltip from "./E-Tooltip.vue";

const mockEmits = vi.fn();
vi.mock("@popperjs/core");

describe("E-Tooltip.vue", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  // test: dom结构是否正常渲染
  test("test: dom结构是否正常渲染", async () => {
    const wrapper = mount(
      () => (
        <ETooltip
          content="hello world!"
          trigger="click"
          onVisibleChange={mockEmits} // unresolved issue: emits name, TS error
        >
          <button id="btn">trigger</button>
        </ETooltip>
      ),
      {
        global: {
          stubs: {
            // EIcon: true,
          },
        },
        attachTo: document.body, // unresolved issue: isVisible() bug
      },
    );
    // console.log("wrapper.html():", wrapper.html());
    // 测试静态结构
    expect(wrapper.find(".e-tooltip").exists()).toBe(true);
    expect(wrapper.find(".e-tooltip__content").exists()).toBe(false);
    expect(wrapper.find("#btn").exists()).toBe(true);
    // 测试点击行为
    expect(wrapper.find(".e-tooltip__popper").exists()).toBe(false);
    // console.log("before:", wrapper.html());
    wrapper.find("#btn").trigger("click");
    await wrapper.vm.$nextTick();
    await vi.runAllTimers();
    // console.log("after:", wrapper.html());
    expect(wrapper.find(".e-tooltip__popper").exists()).toBe(true);
    // 测试jsx的emits事件触发了
    expect(mockEmits).toHaveBeenCalled();
    expect(mockEmits).toHaveBeenCalledTimes(1);
    expect(mockEmits).toHaveBeenCalledWith(true);

    //
  });
});
