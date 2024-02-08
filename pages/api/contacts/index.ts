import connectToDB from "@/pages/api/db";
import contactModel from "@/models/contact";
import { NextApiRequest, NextApiResponse } from "next";

connectToDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const contacts = await contactModel.find();
      return res.status(200).json(contacts);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      if (!name.trim() || !email.trim() || !message.trim()) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newContact = new contactModel({
        name,
        email,
        message,
      });

      const savedContact = await newContact.save();

      res.status(201).json({ message: "New Contact Created:", savedContact });
    } catch (err) {
      console.error("Error creating Contact:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
