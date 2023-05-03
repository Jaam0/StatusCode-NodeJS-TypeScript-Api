import { Collection, Db, MongoClient } from "mongodb";
import { config } from "../helpers/config.helper";

export class Database {
  private readonly database?: string = config.DB.database;
  private readonly host?: string = config.DB.host;
  private readonly port?: string = config.DB.port;
  private readonly user?: string = config.DB.user;
  private readonly password?: string = config.DB.password;
  private db: Db;
  public statusCodeCollection: Collection;

  constructor() {
    this.connectToMongoDB();
  }

  async connectToMongoDB() {
    const url = `mongodb://${this.user}:${this.password}@${this.host}:${this.port}/`;
    // const url = `mongodb+srv://${this.user}:${this.password}@${clusterUrl}/?authMechanism=${authMechanism}`;
    const client = new MongoClient(url);
    await client.connect();
    console.log("-- Connected to MongoDB --");
    this.db = client.db(this.database);
    this.statusCodeCollection = this.db.collection("StatusCode");
  }
}
