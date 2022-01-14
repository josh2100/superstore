const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// Read all tags api/tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      // attributes: ["category_name"], only for certain columns
      // be sure to include its associated Products
      include: [
        {
          model: Product,
          // attributes: ["id", "product_name"],
        },
      ],
    });

    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Read a single tag by id api/tags/:id
router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],
    });

    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new tag api/tags/
router.post("/", async (req, res) => {
    // Expects {"tag_name": "Name"}
    try {
      await Tag.create(req.body);
  
      res.json("New tag created");
    } catch (error) {
      res.status(500).json(error);
    }

});

// Update a tag by its id api/tags/
router.put("/:id", async (req, res) => {
  try {
    await Tag.update(req.body, { where: { id: req.params.id } });

    res.json(`Tag updated`);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a tag by its id api/tag/:id
router.delete("/:id", async (req, res) => {
  try {
    await Tag.destroy({ where: { id: req.params.id } });

    res.json(`Tag deleted`);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
