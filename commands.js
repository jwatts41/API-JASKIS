// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
// use jaskis

// 2. Create a collection called bounties
 // db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
// db.bounties.insertOne({
//     name: "Thanoceros",
//     species: "Rhinoceros",
//     location: "Grasslands",
//     wantedFor: "Eating too much grass",
//     client: "Songbird",
//     reward: 10000,
//     captured: false
//   })
//   { acknowledged: true,
//     insertedId: ObjectId("634c60881a9785ce1021759c") }

//     db.bounties.insertMany([
//         {
//           "name": "Lokinkajou",
//           "species": "Kinkajou",
//           "location": "Tropical rainforest",
//           "wantedFor": "Partying too late at night",
//           "client": "White tiger",
//           "reward": 1000,
//           "captured": false
//         },
//         {
//           "name": "Nebullama",
//           "species": "Llama",
//           "location": "Grasslands",
//           "wantedFor": "Drinking all the water from the ocean",
//           "client": "Songbird",
//           "reward": 2500,
//           "captured": false
//         },
//         {
//           "name": "Polarwind",
//           "species": "Polar Bear",
//           "location": "Arctic",
//           "wantedFor": "Not hibernating",
//           "client": "Sabertooth",
//           "reward": 4000,
//           "captured": false
//         },
//         {
//           "name": "Wrecking Crows",
//           "species": "Crow",
//           "location": "Grasslands",
//           "wantedFor": "Cawing too loudly",
//           "client": "Red wolf",
//           "reward": 40000,
//           "captured": false
//         },
//         {
//           "name": "Grandhog",
//           "species": "Groundhog",
//           "location": "Woodlands",
//           "wantedFor": "Not coming out of the hole on time and prolonging winter",
//           "client": "Songbird",
//           "reward": 50000,
//           "captured": false
//         },
//         {
//           "name": "Grim Panda",
//           "species": "Giant Panda",
//           "location": "Temperate forest",
//           "wantedFor": "Eating all the bamboo",
//           "client": "Red wolf",
//           "reward": 5000,
//           "captured": false
//         }
//       ])
//       { acknowledged: true,
//         insertedIds: 
//          { '0': ObjectId("634c61e01a9785ce1021759d"),
//            '1': ObjectId("634c61e01a9785ce1021759e"),
//            '2': ObjectId("634c61e01a9785ce1021759f"),
//            '3': ObjectId("634c61e01a9785ce102175a0"),
//            '4': ObjectId("634c61e01a9785ce102175a1"),
//            '5': ObjectId("634c61e01a9785ce102175a2") } }

// 2. Query for all bounties in the bounties collection


// 3. Insert many bounties at once using the given objects

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.bounties.find({location: "Grasslands"})
{ _id: ObjectId("634c60881a9785ce1021759c"),
  name: 'Thanoceros',
  species: 'Rhinoceros',
  location: 'Grasslands',
  wantedFor: 'Eating too much grass',
  client: 'Songbird',
  reward: 10000,
  captured: false }
{ _id: ObjectId("634c61e01a9785ce1021759e"),
  name: 'Nebullama',
  species: 'Llama',
  location: 'Grasslands',
  wantedFor: 'Drinking all the water from the ocean',
  client: 'Songbird',
  reward: 2500,
  captured: false }
{ _id: ObjectId("634c61e01a9785ce102175a0"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }

// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find({ reward: { $gt: 10000}})
{ _id: ObjectId("634c61e01a9785ce102175a0"),
  name: 'Wrecking Crows',
  species: 'Crow',
  location: 'Grasslands',
  wantedFor: 'Cawing too loudly',
  client: 'Red wolf',
  reward: 40000,
  captured: false }
{ _id: ObjectId("634c61e01a9785ce102175a1"),
  name: 'Grandhog',
  species: 'Groundhog',
  location: 'Woodlands',
  wantedFor: 'Not coming out of the hole on time and prolonging winter',
  client: 'Songbird',
  reward: 50000,
  captured: false }

// 3. Query for all bounties, but exclude the client attribute from being shown

// 4. Query for a Groundhog in the Woodlands
db.bounties.find({location: "Woodlands"}, {species: "Groundhog"})
{ _id: ObjectId("634c61e01a9785ce102175a1"),
  species: 'Groundhog' }
// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.bounties.updateOne(
    {reward: 4000}, {$set: {reward:10000}})

// 2. Remove Lokinkajou
db.bounties.deleteOne({name: "Lokinkajou"})
{ acknowledged: true, deletedCount: 1 }

// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({client: "Songbird"})
{ acknowledged: true, deletedCount: 3 }

// 4. Update all captured statuses to true
db.bounties.updateMany({captured: false}, {$set: {captured:true}})
{ acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0 }