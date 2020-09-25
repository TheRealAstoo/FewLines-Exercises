import { helloSailor } from "../src/index"

describe("The function helloSailor prints both conditions", () => {
  test("The function helloSailor prints something if no parameter", () => {
    expect.assertions(2);
    
    const spy = jest.spyOn(console, "log");
    spy.mockImplementation(() => {})
  
    helloSailor();
  
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  
    spy.mockRestore();
  })

  test("The function helloSailor prints something if no parameter", () => {
    expect.assertions(2);
    
    const spy = jest.spyOn(console, "log");
    spy.mockImplementation(() => {})
  
    helloSailor("Louis");
  
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Howdy Louis!");
  
    spy.mockRestore();
  })
})
