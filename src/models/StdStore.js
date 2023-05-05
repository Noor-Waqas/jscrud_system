import { types } from "mobx-state-tree";
// create model for user
const UsedModel = types
  .model("user", {
    userId: types.string,
    usename: types.string,
    email: types.string,
    phone: types.number,
    country: types.number,
    homes: types.string,
  })
  .actions((self) => ({
    setMath(value) {
      self.math = parseInt(value);
    },
    setComputer(value) {
      self.computer = parseInt(value);
    },
  }))
  .views((self) => ({
    getTotalMarks() {
      return self.computer + self.math;
    },
    getParsantage() {
      return ((self.computer + self.math) / 200) * 100 + "%";
    },
  }));

const StdStore = UsedModel.create({
  userId: "1123",
  usename: "Web Programming",
  math: 80,
  computer: 90,
});
export default StdStore;
