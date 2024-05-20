const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({

    name : String,
    rating : Number,
    review : String
      });
  
  const Fruit = mongoose.model("Fruit", fruitSchema);              //We use the schema to create the new Fruit model, two parameter are (What is going to the name of the collection it's going to be singular and cap first letter ,  The structure to be followed fron the above designed schema.)

  
  const fruit = new Fruit ({
  
    name: "Apple",
    rating: 7,
    review: "Preety good!"
      });
  
  
    //   fruit.save();

    const personSchema = new mongoose.Schema ({

        name : String,
        age: Number,
        favouriteFruit: fruitSchema
                      });
   
   const Person = mongoose.model("Person", personSchema);
   
   const pineapple = new Fruit ({
           
             name: "Pineapple",
             score: 9,
             review: "Great fruit."

   });
          
     pineapple.save();

     Person.updateOne({name: "John"}, {$set:{favouriteFruit: mango}});

   const person = new Person ({
           name : "Amy",
            age: 12,
            favouriteFruit: pineapple
                      });
   
   
       person.save();
   
    //   to add a bunch of fruits within ur fruits model 
   
      const kiwi = new Fruit({

        name: "Kiwi",
        score: 10,
        review: "The best fruit!"
                   });
 
   const orange = new Fruit({
 
        name: "Orange",
        score: 4,
        review: "Too sour!"
                   });
 
 
 const banana = new Fruit({
 
        name: "Banana",
        score: 3,
        review: "The Weird"
                   });
 
 
    // Fruit.insertMany([kiwi, orange, banana]);
 

    