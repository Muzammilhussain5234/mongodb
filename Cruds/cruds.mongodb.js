use("Cruddb")
db.createCollection("mongodb")
// db.mongodb.insertMany([
//   {
//     course: "how to be a spider mon",
//     section: "villain",
//     age: 55
//   },
//   {
//     course: "how to be a spider mon 2",
//     section: "hero",
//     age: 21
//   },
//   {
//     course: "how to jump like spider",
//     section: "training",
//     age: 18
//   },
//   {
//     course: "web design 101",
//     section: "tech",
//     age: 23
//   },
//   {
//     course: "spider mon tactics",
//     section: "villain",
//     age: 35
//   },
//   {
//     course: "how to swing from buildings",
//     section: "practice",
//     age: 25
//   },
//   {
//     course: "spider sense explained",
//     section: "science",
//     age: 29
//   },
//   {
//     course: "venom control",
//     section: "villain",
//     age: 45
//   },
//   {
//     course: "arachnid biology",
//     section: "theory",
//     age: 32
//   },
//   {
//     course: "costume design",
//     section: "creative",
//     age: 27
//   }
// ])
// let a=db.mongodb.find({age:55})
// console.log(a.toArray())

// let a=db.mongodb.find({age:55})
// console.log(a)

// db.mongodb.updateMany({course: "how to be a spider mon"}, {$set: {section: "ALways a hero"}})
db.mongodb.deleteOne({course: "venom control"})