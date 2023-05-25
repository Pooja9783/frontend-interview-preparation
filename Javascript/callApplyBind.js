//----------Call, Apply, Bind------------------
//-----------Apply----------
const person = {
  fullName: function (place) {
    console.log(
      `My name is ${this.firstName} ${this.lastName} i live in ${place}`
    );
  },
};

const personName = {
  firstName: "Pooja",
  lastName: "Sankhala",
};

person.fullName.apply(personName, ["Bangalore"]);

//-----------Call----------
const personDetails = {
  fullName: function (place) {
    console.log(`my name is ${this.fullName} i live in ${place}`);
  },
};

const personDetailsName = {
  fullName: "Pooja Sankhala",
};
personDetails.fullName.call(personDetailsName, "Bangalore");

//-----------Bind----------
const animal = {
  animalName: function () {
    console.log(`This is a ${this.name}`);
  },
};

const nameOfAnimal = {
  name: "Dog",
};

const res = animal.animalName.bind(nameOfAnimal);
res();
