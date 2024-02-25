// import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import EButton from "./E-Button.vue";

// wrapper api: https://v1.test-utils.vuejs.org/zh/api/wrapper/

describe("E-Button.vue", () => {
  // test: mounts a component
  test("test: mounts a component", () => {
    const wrapper = mount(EButton, {
      props: {
        type: "primary",
      },
      slots: {
        default: "Button",
      },
    });
    // console.log(wrapper.html());
    // 测试class
    expect(wrapper.classes()).toContain("e-button--primary");
    // 测试slot
    expect(wrapper.get("button").text()).toBe("Button");
    // 测试event
    wrapper.get("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
    // 换种方式
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  // test: props disabled
  test("test: props disabled", () => {
    const wrapper = mount(EButton, {
      props: {
        disabled: true,
      },
      slots: {
        default: "Button disabled",
      },
    });
    // 测试attribute
    expect(wrapper.attributes("disabled")).toBeDefined();
    // 换种方式2
    expect(wrapper.get("button").attributes("disabled")).toBeDefined();
    // 换种方式3
    expect(wrapper.get("button").element.disabled).toBeTruthy();
    // 测试event
    wrapper.get("button").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  // test: props icon
  test("test: props icon", () => {
    const wrapper = mount(EButton, {
      props: {
        icon: "arrow-up",
      },
      slots: {
        default: "Button with icon",
      },
      global: {
        stubs: ["FontAwesomeIcon"],
      },
    });
    console.log(wrapper.html());
    // 找组件
    const targetComponent = wrapper.findComponent({ name: "FontAwesomeIcon" });
    expect(targetComponent.exists()).toBeTruthy();
    // 测试props icon
    expect(targetComponent.props("icon")).toBe("arrow-up");
  });

  // test: props loading
  test("test: props loading", () => {
    const wrapper = mount(EButton, {
      props: {
        loading: true,
      },
      slots: {
        default: "Button loading",
      },
      global: {
        stubs: ["EIcon"],
      },
    });
    console.log(wrapper.html());
    // 找组件
    const targetComponent = wrapper.findComponent({ name: "EIcon" });
    expect(targetComponent.exists()).toBeTruthy();
    // 测试targetComponent props icon
    expect(targetComponent.props("icon")).toBe("spinner");
    // 测试targetComponent props disabled为true
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
