import { mount } from "enzyme";
import React from "react";
import ContactForm from "../../src/components/ContactForm";

describe("Forms validations", () => {
  let FormDOM, inputCount;
  FormDOM = mount(<ContactForm />);
  inputCount = FormDOM.find(".form-control").length;

  beforeEach(() => {
    FormDOM = mount(<ContactForm />);
  });

  it("Should display an html form tag", () => {
    expect.assertions(1);

    const form = FormDOM.find("form");
    expect(form).toHaveLength(1);
  });

  if (inputCount < 4) {
    it("Should have four input groups", () => {
      expect.assertions(1);

      const inputs = FormDOM.find(".form-control");
      expect(inputs).toHaveLength(4);
    });
  } else {
    ["First Name", "Last Name", "Email", "Message"].forEach((expectedLabel) => {
      describe(`- ${expectedLabel}`, () => {
        it(`Should display a '${expectedLabel}' label`, () => {
          expect.assertions(1);

          const labels = FormDOM.find("label");
          if (labels && labels.length > 1) {
            const label = labels
              .getElements()
              .find((label) => label.props.children === expectedLabel);
            expect(label).toBeDefined();
          }
        });

        const slugifiedLabel = expectedLabel.toLowerCase().replace(" ", "-");

        it(`Should display an input with 'class=".form-control" and 'id="${slugifiedLabel}"'`, () => {
          expect.assertions(1);

          const inputs = FormDOM.find(".form-control");

          if (inputs && inputs.length > 1) {
            const input = inputs
              .getElements()
              .find((input) => input.props.id === slugifiedLabel);
            expect(input).toBeDefined();
          }
        });
      });
    });
  }

  it("Should display a submit button", () => {
    expect.assertions(2);

    const button = FormDOM.find("button");
    expect(button).toHaveLength(1);

    const type = button.getElement().props.type;
    expect(type).toBe("submit");
  });
});
