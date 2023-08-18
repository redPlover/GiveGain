import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const posts = await prisma.post.findMany({
        orderBy: {
            updatedAt: 'desc'
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
            authorId: true,
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
        const json = await request.json();
        console.log(json);

        const user = await prisma.post.create({
            data: {
                title: json.title,
                content: json.content,
                location: json.location,
                duration: json.duration,
                lapse: json.lapse,
                visible: json.visible,
                tags: json.tags,
                max: json.max,
                authorId: json.authorId
            }
        });

        return new NextResponse(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            return new NextResponse("User with email already exists", {
                status: 409,
            });
        }
        return new NextResponse(error.message, { status: 500 });
    }
}
