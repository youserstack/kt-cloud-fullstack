const { MongoClient } = require("mongodb");

async function main() {
  try {
    // 연결
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    const collection = client.db("test").collection("users");

    // 생성/조회/수정/삭제

    const created = await collection.insertOne({
      name: "batman",
      age: 999999999,
    });
    console.log({ created });

    const found = await collection.find({ name: "batman" }).toArray();
    console.log({ found });

    const updated = await collection.updateOne(
      { name: "batman" },
      { $set: { age: 100 } }
    );

    console.log({ updated });

    const deleted = await collection.deleteOne({ name: "batman" });
    console.log({ deleted });
  } catch (e) {
    console.error(e);
  }
}

main();
