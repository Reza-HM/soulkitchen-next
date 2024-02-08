import connectToDB from "@/pages/api/db";
import questionModel from "@/models/question";
import { NextApiRequest, NextApiResponse } from "next";

connectToDB();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const questions = await questionModel.find();
      return res.status(200).json(questions);
    } catch (err) {
      console.error("Error fetching questions:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { question, answer } = req.body;

      if (!question.trim() || !answer.trim()) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newQuestion = new questionModel({
        question,
        answer,
      });

      const savedQuestion = await newQuestion.save();

      res.status(201).json({ message: "New Question Created:", savedQuestion });
    } catch (err) {
      console.error("Error creating Question:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
