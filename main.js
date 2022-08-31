function Person(fullName) {
  this.fullName = fullName;
  this.sleepMood = "happy";
  this.healthRate = "";
  this.money = 20;
}
Object.assign(Person.prototype, {
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "Happy";
      console.log(this.sleepMood);
    } else if (hours >= 7) {
      this.sleepMood = "Tired";
      console.log(this.sleepMood);
    } else if (hours <= 7) {
      this.sleepMood = "Lazy";
      console.log(this.sleepMood);
    }
  },
  eat(meals) {
    switch (meals) {
      case (meals = 3):
        this.healthRate = "100 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 2):
        this.healthRate = "75 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 1):
        this.healthRate = "50 Health Rate";
        console.log(this.healthRate);
        break;
      default:
        console.log("Error input");
    }
  },
  buy(items) {
    if ((items = 1)) {
      this.money -= 10;
      console.log(this.money);
    }
  },
});

const ahmed = new Person("ahmed");
console.log(ahmed);
ahmed.sleep(10);
ahmed.eat(3);
ahmed.buy(1);
//////////////////////////// Class Constructor
class Person {
  constructor(fullName) {
    this.fullName = fullName;
    this.sleepMood = "happy";
    this.healthRate = "";
    this.money = 0;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "Happy";
      console.log(this.sleepMood);
    } else if (hours >= 7) {
      this.sleepMood = "Tired";
      console.log(this.sleepMood);
    } else if (hours <= 7) {
      this.sleepMood = "Lazy";
      console.log(this.sleepMood);
    }
  }
  eat(meals) {
    switch (meals) {
      case (meals = 3):
        this.healthRate = "100 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 2):
        this.healthRate = "75 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 1):
        this.healthRate = "50 Health Rate";
        console.log(this.healthRate);
        break;
      default:
        console.log("Error input");
    }
  }
  buy(items) {
    if ((items = 1)) {
      this.money -= 10;
      console.log(this.money);
    }
  }
}
const ahmed = new Person("ahmed");
console.log(ahmed);
ahmed.sleep(10);
ahmed.eat(3);
ahmed.buy(1);
//////////////////////////// OLOO Constructor
const Person = {
  init(fullName) {
    this.fullName = fullName;
    this.sleepMood;
    this.healthRate;
    this.money;
  },
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "Happy";
      console.log(this.sleepMood);
    } else if (hours >= 7) {
      this.sleepMood = "Tired";
      console.log(this.sleepMood);
    } else if (hours <= 7) {
      this.sleepMood = "Lazy";
      console.log(this.sleepMood);
    }
  },
  eat(meals) {
    switch (meals) {
      case (meals = 3):
        this.healthRate = "100 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 2):
        this.healthRate = "75 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 1):
        this.healthRate = "50 Health Rate";
        console.log(this.healthRate);
        break;
      default:
        console.log("Error input");
    }
  },
  buy(items) {
    if ((items = 1)) {
      this.money -= 10;
      console.log(this.money);
    }
  },
};
const ahmed = Object.create(Person);
ahmed.init("ahmed");
console.log(ahmed);
ahmed.sleep(10);
ahmed.eat(3);
ahmed.buy(1);
//////////////////////////// Factor Constructor
function Person(fullName) {
  return {
    fullName,
    money: 30,
    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = "Happy";
        console.log(this.sleepMood);
      } else if (hours >= 7) {
        this.sleepMood = "Tired";
        console.log(this.sleepMood);
      } else if (hours <= 7) {
        this.sleepMood = "Lazy";
        console.log(this.sleepMood);
      }
    },
    eat(meals) {
      switch (meals) {
        case (meals = 3):
          this.healthRate = "100 Health Rate";
          console.log(this.healthRate);
          break;
        case (meals = 2):
          this.healthRate = "75 Health Rate";
          console.log(this.healthRate);
          break;
        case (meals = 1):
          this.healthRate = "50 Health Rate";
          console.log(this.healthRate);
          break;
        default:
          console.log("Error input");
      }
    },
    buy(items) {
      if ((items = 1)) {
        this.money -= 10;
        console.log(this.money);
      }
    },
  };
}
const ahmed = Person("ahmed");
console.log(ahmed);
ahmed.sleep(10);
ahmed.eat(3);
ahmed.buy(1);
