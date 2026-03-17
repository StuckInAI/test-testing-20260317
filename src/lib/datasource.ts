import { DataSource } from "typeorm";
import { Subscriber } from "./entities/Subscriber";
import path from "path";

const dbPath = process.env.DATABASE_PATH
  ? path.resolve(process.env.DATABASE_PATH)
  : path.resolve(process.cwd(), "data", "subscribers.db");

let AppDataSource: DataSource | null = null;

export function getDataSource(): DataSource {
  if (!AppDataSource) {
    AppDataSource = new DataSource({
      type: "better-sqlite3",
      database: dbPath,
      synchronize: true,
      logging: false,
      entities: [Subscriber],
    });
  }
  return AppDataSource;
}

export async function getInitializedDataSource(): Promise<DataSource> {
  const ds = getDataSource();
  if (!ds.isInitialized) {
    await ds.initialize();
  }
  return ds;
}
