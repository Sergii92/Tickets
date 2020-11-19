import EnZyme from "enzyme";
import EnZymeAdapter from "enzyme-adapter-react-16";

import "jest-enzyme";

EnZyme.configure({
  adapter: new EnZymeAdapter(),
  disableLifecycleMethods: true,
});
