import { SHA256 as sha256 } from "crypto-js";
// import prisma client
import prisma from "./lib/prisma";
import hashPassword from "./create"
export default async function handle(req, res) {
    if (req.method === "POST") {
        //login uer
        await loginUserHandler(req, res);
    } else {
        return res.status(405);
    }
}
async function loginUserHandler(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "invalid inputs" });
    }
    try {
        const user = await prisma.user.findUnique({
            where: { username: username },
            select: {
                id: true,
                username: true,
                email: true,
                password: true,
                icon: false,
            },
        });
        if (user && user.password === hashPassword(password)) {
            // exclude password from json response
            return res.status(200).json(exclude(user, ["password"]));
        } else {
            return res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (e) {
        throw new Error(e);
    }
}
// Function to exclude user password returned from prisma
function exclude(user, keys) {
    for (let key of keys) {
        delete user[key];
    }
    return user;
}
