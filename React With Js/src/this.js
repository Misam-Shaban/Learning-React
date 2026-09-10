let name = "Misam Shaban";

const obj = {
  name: "Ahmad Shaban",
  forThis: () => {
    //   console.log(this.name);'
    return `My Name is ${this.name}`;
  },
};

// console.log("just Log", this);

// const getName = () => {
//   `My Name is ${this}`;
// };

// console.log(getName());

console.log(obj.forThis());
