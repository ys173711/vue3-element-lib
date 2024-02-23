// import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import EButton from "./E-Button.vue";

describe("E-Button.vue", () => {
  test("mounts a component and output HTML", () => {
    const wrapper = mount(EButton, {
      props: {
        type: "primary",
      },
      slots: {
        default: "Button",
      },
    });
    console.log(wrapper.html());
  });
});
