import { NextRequest, NextResponse } from "next/server";
import { getInitializedDataSource } from "@/lib/datasource";
import { Subscriber } from "@/lib/entities/Subscriber";
import fs from "fs";
import path from "path";

function ensureDataDir() {
  const dbPath = process.env.DATABASE_PATH
    ? path.resolve(process.env.DATABASE_PATH)
    : path.resolve(process.cwd(), "data", "subscribers.db");
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    ensureDataDir();

    const ds = await getInitializedDataSource();
    const subscriberRepo = ds.getRepository(Subscriber);

    const existing = await subscriberRepo.findOne({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    const subscriber = subscriberRepo.create({ email });
    await subscriberRepo.save(subscriber);

    return NextResponse.json(
      { message: "Successfully subscribed!", id: subscriber.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
