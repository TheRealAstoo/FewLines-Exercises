import { mount } from "enzyme";
import React from "react";
import Form from "../../src/components/Form";

describe("Forms validations", () => {
  let FormDOM;
  beforeEach(() => {
    FormDOM = mount(<Form />);
  });

  it("Should display an html form tag", () => {
    expect.assertions(1);

    const form = FormDOM.find("form");
    expect(form).toHaveLength(1);
  });

  it("Should display a `First Name` label", () => {
    expect.assertions(2);

    const label = FormDOM.find("label");
    expect(label).toHaveLength(1);

    const text = label.getElement().props.children;
    expect(text).toBe("First Name");
  });

  it("Should display an input", () => {
    expect.assertions(1);

    const input = FormDOM.find("input");
    expect(input).toHaveLength(1);
  });

  it("Should display a submit button", () => {
    expect.assertions(2);

    const button = FormDOM.find("button");
    expect(button).toHaveLength(1);

    const type = button.getElement().props.type;
    expect(type).toBe("submit");
  });

  test("The form should have a function linked to the 'onSubmit' event", () => {
    expect.assertions(2);

    const form = FormDOM.find("form");
    expect(form).toHaveLength(1);

    const onSubmit = form.getElement().props.onSubmit;
    expect(typeof onSubmit).toBe("function");
  });

  test("The input should have a function linked to the 'onChange' event", () => {
    expect.assertions(2);

    const input = FormDOM.find("input");
    expect(input).toHaveLength(1);

    const onChange = input.getElement().props.onChange;
    expect(typeof onChange).toBe("function");
  });

  test("No error should be displayed when provided with 'hello-world'", () => {
    expect.assertions(1);

    const input = FormDOM.find("input");
    input.simulate("change", {
      target: { value: "hello-world" },
    });
    const button = FormDOM.find("button");
    button.simulate("click");
    const html = FormDOM.html();

    expect(html).not.toMatch(/no spaces allowed/i);
  });

  test("An error should be displayed when provided with 'hello world'", () => {
    expect.assertions(1);

    const input = FormDOM.find("input");

    input.simulate("change", {
      target: { value: "hello world" },
    });
    const button = FormDOM.find("button");
    button.simulate("click");
    const html = FormDOM.html();

    expect(html).toMatch(/no spaces allowed/i);
  });
});
