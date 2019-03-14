import { mount } from "@vue/test-utils";

import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";
import Login from "@/components/Login";

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

describe("Login.vue", () => {
  it("should be called Login", () => {
    const wrapper = mount(Login);
    expect(wrapper.name()).toBe("Login");
  });

  it("should have two input fields", () => {
    const wrapper = mount(Login);
    const expectedForm = { username: "", password: "" };
    expect(wrapper.vm.form).toMatchObject(expectedForm);
  });
});
