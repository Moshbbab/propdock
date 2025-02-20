/* eslint-env node */
import { truncate } from "@/lib/utils"
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const title = searchParams.get("title") || "Help Center"
    const summary =
      searchParams.get("summary") || "Learn more about our platform"

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(243, 241, 239)",
            backgroundImage:
              "linear-gradient(rgb(44, 40, 37, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgb(44, 40, 37, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            color: "rgb(44, 40, 37)",
            padding: "0 60px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontFamily: "SF Pro",
              margin: "0 0 20px 0",
              lineHeight: 1.1,
              fontWeight: 700,
              maxWidth: "900px",
            }}
          >
            {truncate(title, 100)}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 24,
              fontFamily: "SF Pro",
              opacity: 0.8,
              maxWidth: "600px",
            }}
          >
            {truncate(summary, 140)}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.error(`Failed to generate OG image: ${e.message}`)
    return new Response(`Failed to generate OG image: ${e.message}`, {
      status: 500,
    })
  }
}
