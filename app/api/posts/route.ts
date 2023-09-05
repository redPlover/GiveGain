import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const posts = await prisma.post.findMany({
        orderBy: {
            time: 'desc'
        },
        where: {
            visible: true
        },
        select: {
            id: true,
            title: true,
            content: true,
            images: true,
            location: true,
            time: true,
            authorId: true,
            tags: true,
            user: {
                select: {
                    name: true,
                    username: true
                }
            }
        }
    });
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    try {
        const json = JSON.parse(await request.text()).data;
        const data = {
            title: json.title,
            content: json.content,
            location: json.location,
            time: json.time+':00.000Z',
            visible: json.visible,
            tags: json.tags,
            max: json.max,
            authorId: json.authorId
        }

        const user = await prisma.post.create({
            data: data
        });

        return new NextResponse(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            return new NextResponse("Error code P2002: Please contact website admin", {
                status: 409,
            });
        }
        return new NextResponse(error.message, { status: 500 });
    }
}
