import { NextRequest, NextResponse } from "next/server";
import { getDataSource } from "@/lib/database";
import { Item } from "@/entities/Item";

export async function GET() {
  try {
    const dataSource = await getDataSource();
    const itemRepository = dataSource.getRepository(Item);
    const items = await itemRepository.find({
      order: { createdAt: "DESC" },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json(
        { error: "Name is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    const dataSource = await getDataSource();
    const itemRepository = dataSource.getRepository(Item);

    const item = itemRepository.create({ name: name.trim() });
    const savedItem = await itemRepository.save(item);

    return NextResponse.json(savedItem, { status: 201 });
  } catch (error) {
    console.error("Error creating item:", error);
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 }
    );
  }
}
