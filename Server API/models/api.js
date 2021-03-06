/**
 * Created by taipham on 9/29/14.
 */

 var collection = {};
 var User = require('./db-provider').Users;
 var Post = require('./db-provider').Posts;
 var Category = require('./db-provider').Categories;
 var Comment = require('./db-provider').Comments;
 var userSchema2 = require('./db-provider').userSchema2;

 collection.users = require('./crud')(User);
 collection.posts = require('./crud')(Post);
 collection.category = require('./crud')(Category);
 collection.comments = require('./crud')(Comment);
 collection.userSchema2 = require('./crud')(userSchema2);

 module.exports = collection;


/*
(function (collection) {
    collection.api = function (req, res) {
        console.log(req.params.tableName);

        var tableName = req.params.tableName;

        var apiCollection = require('./db-provider')[tableName];

        require('./crud')(apiCollection)

    };
})(module.exports)
*/


