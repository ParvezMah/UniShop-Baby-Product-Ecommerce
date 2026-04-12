import express from "express";
import { admin, protect } from "../middleware/authMiddleware";

const router = express.Router();


router .route("/")
    .get(getBanners)
    .post(protect, admin, createBanner);


router
    .route("/:id")
    .get(protect, getBannerById)
    .put(protect, admin, updateBannerById)
    .delete(protect, admin, deleteBannerById);

export default router;