// import { types } from "mobx-state-tree";
// // create model for user
// const UsedModel = types
//   .model("user", {
//     userId: types.string,
//     name: types.string,
//     email: types.string,
//     phone: types.number,
//     country: types.number,
//     homes: types.string,
//   })
//   .actions((self) => ({
//     setMath(value) {
//       self.math = parseInt(value);
//     },
//     setComputer(value) {
//       self.computer = parseInt(value);
//     },
//   }))
//   .views((self) => ({
//     getApiStd() {
//       const studentData = { name, email, phone, country, active, homes };
//       fetch("http://localhost:3000/students", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(studentData),
//       })
//         .then((res) => {
//           alert("Save Successfully");
//           navigate("/");
//         })
//         .catch((error) => {
//           console.log(error.message);
//         });
//     },
//     getParsantage() {
//       return ((self.computer + self.math) / 200) * 100 + "%";
//     },
//   }));

// const StdStore = UsedModel.create({});
// export default StdStore;
