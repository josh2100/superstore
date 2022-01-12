const router = require("express").Router();
const { Category, Product } = require("../../models");

///api/categories endpoint
// returns empty set []
router.get("/", async (req, res) => {
  console.log("======================");
  //  find all categories
  const categories = await Category.findAll({
    attributes: ["category_name"],
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        attributes: ["id"],
      },
    ],
  });

  // test findAll()
  // const categories = await Category.findAll();

  res.json(categories);

  // Test validates that route works
  // const result = "hello"
  // res.json(result);
});

// api/categories/:id
router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
