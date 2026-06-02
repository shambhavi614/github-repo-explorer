import axios from "axios";
import { NextResponse } from "next/server";

const cache = new Map();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;

    const cachedData = cache.get(username);

    if (
      cachedData &&
      Date.now() - cachedData.timestamp < 60000
    ) {
      console.log("Serving from cache");

      return NextResponse.json(cachedData.data);
    }

    const [userResponse, reposResponse] =
      await Promise.all([
        axios.get(
          `https://api.github.com/users/${username}`
        ),
        axios.get(
          `https://api.github.com/users/${username}/repos`
        ),
      ]);

    const data = {
      user: userResponse.data,
      repos: reposResponse.data,
    };

    cache.set(username, {
      data,
      timestamp: Date.now(),
    });

    console.log("Fetched from GitHub API");

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }
}