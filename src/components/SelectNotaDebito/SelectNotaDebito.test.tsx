import React from "react";
import { shallow } from "enzyme";
import SelectNotaDebito from "./SelectNotaDebito";

it("Renders without crashing", () => {
  const wrapper = shallow(<SelectNotaDebito />);

  expect(wrapper).toMatchSnapshot();
});