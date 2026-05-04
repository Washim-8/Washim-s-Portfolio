// models/Project.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  id: string;
  name: string;
  category: "AI/ML" | "Web Development" | "Data Science";
  featured: boolean;
  isMajor: boolean;
  description: string;
  bullets: string[];
  technologies: string[];
  github: string;
  liveDemo?: string;
  order: number;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["AI/ML", "Web Development", "Data Science"],
      required: true,
    },
    featured: { type: Boolean, default: false },
    isMajor: { type: Boolean, default: false },
    description: { type: String },
    bullets: [{ type: String }],
    technologies: [{ type: String }],
    github: { type: String },
    liveDemo: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Project: Model<IProject> =
  mongoose.models.Project ?? mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
