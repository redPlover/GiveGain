import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log(request.url);
    const user = await prisma.login.findUnique({
        where: {
            id: "cllay4cr70000o6983v7c8os5"
        }
    });
    return NextResponse.json(user);
}

// export async function POST(request: Request) {
//     try {
//         const json = await request.json();

//         const user = await prisma.post.create({
//             data: json,
//         });

//         return new NextResponse(JSON.stringify(user), {
//             status: 201,
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error: any) {
//         if (error.code === "P2002") {
//             return new NextResponse("User with email already exists", {
//                 status: 409,
//             });
//         }
//         return new NextResponse(error.message, { status: 500 });
//     }
// }
