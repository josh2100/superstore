const router = require("express").Router();
const { Category, Product } = require("../../models");

///api/categories endpoint
// returns empty set []
router.get("/", async (req, res) => {
  try {
    //  find all categories
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

    // test findAll()
    // const categories = await Category.findAll();

    res.json(categories);
  } catch (error) {
    res.status(500).json(error);
  }

  // Test validates that route works
  // const result = "hello"
  // res.json(result);
});

// api/categories/:id
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }

  // find one category by its `id` value
  // findOne([ where: id....])
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    await Category.create(req.body);

    res.json("category created");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
     await Category.update(req.body, {where: { id: req.params.id }})
    
    res.json(`category updated`);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    await Category.destroy({where: {id: req.params.id }})
   
   res.json(`category deleted`);
 } catch (error) {
   res.status(500).json(error);
 }
});

module.exports = router;
