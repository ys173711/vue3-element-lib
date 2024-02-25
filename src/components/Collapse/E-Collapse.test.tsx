import { mount } from "@vue/test-utils";
import ECollapse from "./E-Collapse.vue";
import ECollapseItem from "./E-CollapseItem.vue";

// wrapper api: https://v1.test-utils.vuejs.org/zh/api/wrapper/

describe("E-Collapse.vue", () => {
  // test: mounts a component
  test("test: mounts a component", () => {
    const wrapper = mount(ECollapse, {
      slots: {
        default: "<span>test</span>",
      },
    });
    // console.log(wrapper.html());
    wrapper;
  });

  // test: dom结构是否正常渲染
  test("test: dom结构是否正常渲染", async () => {
    const wrapper = mount(
      () => (
        <ECollapse modelValue={["a"]}>
          <ECollapseItem name="a" title="title a">
            content a
          </ECollapseItem>
          <ECollapseItem name="b" title="title b">
            content b
          </ECollapseItem>
          <ECollapseItem name="c" title="title c" disabled>
            content c
          </ECollapseItem>
        </ECollapse>
      ),
      {
        global: {
          stubs: {
            EIcon: true,
          },
        },
        // https://github.com/jsdom/jsdom/issues/3502
        // jsdom version > 21.1
        attachTo: document.body, // unresolved issue: isVisible() bug
      },
    );
    // console.log("wrapper.html():", wrapper.html());
    // 测试dom结构是否正常渲染
    const titleEls = wrapper.findAll(".e-collapse-item__title");
    expect(titleEls.length).toBe(3);
    const contentEls = wrapper.findAll(".e-collapse-item__wrapper");
    expect(contentEls.length).toBe(3);
    const firstContentEl = contentEls[0];
    expect(firstContentEl.text()).toBe("content a");
    const secondContentEl = contentEls[1];
    expect(secondContentEl.text()).toBe("content b");

    // 测试css是否visible
    expect(firstContentEl.isVisible()).toBeTruthy();
    expect(secondContentEl.isVisible()).toBeFalsy();

    // 测试点击title, content隐藏
    const firstTitleEl = titleEls[0];
    expect(firstContentEl.isVisible()).toBeTruthy();
    await firstTitleEl.trigger("click");
    expect(firstContentEl.isVisible()).toBeFalsy();
    // const secondHeaderEl = titleEls[1];
    // await secondHeaderEl.trigger("click");
    // console.log(secondContentEl.html());
    // expect(secondContentEl.isVisible()).toBeTruthy();

    // 测试disabled
    expect(wrapper.findAll(".e-collapse-item")[2].classes()).toContain(
      "is-disabled",
    );
  });
});
