import "reflect-metadata";
import { DataSource } from "typeorm";
import { Item } from "@/entities/Item";
import path from "path";

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  const dbPath = process.env.DATABASE_PATH
    ? path.resolve(process.env.DATABASE_PATH)
    : path.resolve("./database.sqlite");

  dataSource = new DataSource({
    type: "better-sqlite3",
    database: dbPath,
    synchronize: true,
    logging: process.env.NODE_ENV === "development",
    entities: [Item],
  });

  await dataSource.initialize();
  return dataSource;
}
