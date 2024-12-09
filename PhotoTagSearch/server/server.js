import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const buildFolder = "../dist";

//TODO Complete the server


//npm run dev to start React app and Express server on separate ports
//npm run prod to build React app and start Express server