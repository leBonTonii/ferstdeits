module.exports = function(router) {
  
  var Category = require('../models/Category');
  

  router.route('/categories')
  // create a category (accessed at POST http://localhost:8080/api/categorys)
  .post(function(req, res) {
      var category = new Category();      // create a new instance of the Category model
      category.name = req.body.name;  // set the categories name (comes from the request)

      // save the category and check for errors
      category.save(function(err) {
        if (err)
          return res.send(err);

        res.json({ message: 'Category created!' });
      });
  })
  .get(function(req, res) {
    Category.find(function(err, categories) {
      if (err)
        return res.send(err);

      res.json(categories);
    });
  });

router.route('/categories/:category_id')
  // get the category with that id (accessed at GET http://localhost:8080/api/categorys/:category_id)
  .get(function(req, res) {
    Category.findById(req.params.category_id, function(err, category) {
      if (err)
        return res.send(err);

      res.json(category);
      });
  })
  .put(function(req, res) {
  // use our category model to find the bear we want
    Category.findById(req.params.category_id, function(err, category) {
      if (err)
        return res.send(err);
      category.name = req.body.name;  // update the category info
      // save the category
      category.save(function(err) {
        if (err)
          return res.send(err);

        res.json({ message: 'category updated!' });
      });
    });
  })
  .delete(function(req, res) {
    Category.remove({
      _id: req.params.category_id
    }, function(err, category) {
      if (err)
        return res.send(err);

      res.json({ message: 'Successfully deleted' });
      });
  });
}
