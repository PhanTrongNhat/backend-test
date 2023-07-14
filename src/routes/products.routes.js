import express from "express";
import { getAllProduct } from "../controllers/products.controller.js";

const router = express.router();

router.get("/", getAllProduct);