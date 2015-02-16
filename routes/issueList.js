module.exports = function(app) {

    app.get('/issue/list', function(req, res) {

        var issues = app.db.get('issues');

        issues.find({}, {
            limit: 20
        }, function (err, result) {

        res.render('issueList.jade', {
            issues: result
        });
        });
    });
}
