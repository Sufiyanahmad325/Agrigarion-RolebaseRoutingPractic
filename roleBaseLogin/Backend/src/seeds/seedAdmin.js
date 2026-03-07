import { User } from "../models/user.schema.js";


export default async function seedAdmin() {
    try {
        const adminEmail = process.env.ADMIN_EMAIL
        const adminPassword = process.env.ADMIN_PASSWORD
        const name = process.env.ADMIN_NAME

        if (!adminEmail || !adminPassword || !name) {
            console.log("Admin credentials are not provided in .env file");
            return
        }


        const userExists = await User.findOne({ email: adminEmail })

        if (userExists) {
            console.log("Admin user already exists");
            return
        }


        const adminUser = await User.create({
            name: name,
            email: adminEmail,
            password: adminPassword,
            role: "admin"

        })

        if (adminUser) {
            console.log("Admin user seeded successfully");
        } else {
            console.log("Failed to seed admin user");
        }
    }
    catch (error) {
        console.error("Error occurred while seeding admin user:", error);
    }

}
