import { mount } from "@vue/test-utils";

import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";

describe("HelloWorld.vue component", () => {
  it("should be called HelloWorld", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.name()).toBe("HelloWorld");
  });
});

describe("App.vue", () => {
  it("should be called App", () => {
    const wrapper = mount(App);
    expect(wrapper.name()).toBe("App");
  });
});
