import { mount } from "enzyme";
import React from "react";

import { HideOrNotHide } from "../../src/components/HideOrNotHide";

describe("Basic component creation", () => {
  let DOM;
  beforeEach(() => {
    DOM = mount(<HideOrNotHide />);
  });

  describe("#HideOrNotHide", () => {
    test("The component should exist", () => {
      expect.assertions(1);

      const component = DOM.find(HideOrNotHide);
      expect(component).toHaveLength(1);
    });
  });

  describe("#Button", () => {
    it("Should be present", () => {
      expect.assertions(1);

      const button = DOM.find("button");
      expect(button).toHaveLength(1);
    });

    it("Should have an 'onClick' function property", () => {
      expect.assertions(2);

      const button = DOM.find("button");
      const {
        props: { onClick },
      } = button.getElement();

      expect(onClick).toBeDefined();
      expect(typeof onClick).toBe("function");
    });

    test("Button text should change on click", () => {
      expect.assertions(1);

      const button = DOM.find("button");
      const {
        props: { children: buttonText },
      } = button.getElement();

      button.simulate("click");
      const buttonAfterClick = DOM.find("button");
      const {
        props: { children: buttonTextAfterClick },
      } = buttonAfterClick.getElement();

      expect(buttonText).not.toBe(buttonTextAfterClick);
    });
  });

  describe("#Text", () => {
    it("Should be present on load", () => {
      expect.assertions(1);

      const text = DOM.find("p");
      expect(text).toHaveLength(1);
    });

    it("Should be hidden when clicking on the button", () => {
      expect.assertions(1);

      const button = DOM.find("button");

      button.simulate("click");

      const text = DOM.find("p");
      expect(text).toHaveLength(0);
    });
  });
});
