const { createCategorySchema } = require("../middlewares/validator");
const Category = require("../models/categoryModel");

exports.getCategories = async (req, res) => {
    try {
        const result = await Category.find();
        res.status(200).json({ success: true, message: 'Category list retrieved successfully', data: result });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ success: false, message: "Error fetching categories", error: error.message });
    }
};
