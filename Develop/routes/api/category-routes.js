const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
  const category_data=await Category.findAll({
    include : Product,
  })
  res.json(category_data);
} catch(error){
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const category_data=await Category.findByPk(req.params.id,
      {include : Product});
   
    if (!category_data) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(userData);

  }catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const category_data=await Category.create(req.body);
    res.status(200).json(category_data);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const category_data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!category_data[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(category_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category_data = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category_data) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(category_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
