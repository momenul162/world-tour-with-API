const data = {
  name: "Bajlur Rashid",
  job: "Service Holder",
  address: {
    village: "Pardilalpur",
    post: "kansat",
    thana: "Shibganj",
    district: "Chapai-nawabganj",
  },
  fullData: function (name) {
    // console.log(
    //   `Hello I'm ${name} and I'm from ${this.address.district}. My job, I'm a ${this.job}.`
    // );
  },
  myFrieds: ["Sakil", "Hridoy", "Raihan", "Bashir"],
};
data.fullData("Momenul Islam");
// console.log(data);

// use template string
const aboutMySelf = `This is ${data.name}, I'm a ${data.job}. My home town ${data.address.district}. My friend name is ${data.myFrieds[1]}.`;
console.log(aboutMySelf);
