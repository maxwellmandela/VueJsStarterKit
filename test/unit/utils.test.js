import { mount } from "@vue/test-utils";

import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue component", () => {
  it("should display Essential Links", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.name()).toBe("HelloWorld");
  });
});
