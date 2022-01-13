const router = require("express").Router();
const { Category, Product } = require("../../models");

// Read all categories api/categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      // attributes: ["category_name"], only for certain columns
      // be sure to include its associated Products
      include: [
        {
          model: Product,
          attributes: ["id", "product_name"],
        },
      ],
    });

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Read a single category by id api/categories/:id 
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new category api/categories/
router.post("/", async (req, res) => {
  // Expects {"category_name": "Name"}
  try {
    await Category.create(req.body);

    res.json("category created");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a category by its id value api/categories/
router.put("/:id", async (req, res) => {
  try {
    await Category.update(req.body, { where: { id: req.params.id } });

    res.json(`category updated`);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a category by its id value api/categories/:id
router.delete("/:id", async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id } });

    res.json(`category deleted`);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
