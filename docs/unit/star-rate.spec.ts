import { shallowMount } from "@vue/test-utils";
import StarRate from "@/components/StarRate.vue";

describe("StarRate.vue", () => {
  it("renders props.modelValue when passed", () => {
    const modelValue = 5;
    const wrapper = shallowMount(StarRate, {
      props: { modelValue }
    });
    expect(wrapper.text()).toContain("5 out of 5 Stars");
  });

  it("renders props.maxCount when passed", () => {
    const maxAmount = 15;
    const wrapper = shallowMount(StarRate, {
      props: { modelValue: 5, maxAmount }
    });
    expect(wrapper.text()).toContain("5 out of 15 Stars");
  });
});
