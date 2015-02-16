module.exports = function(app) {

    app.get('/issue/view/:id', function(req, res) {

        var issues = app.db.get('issues');
        console.log(req.params.id);
        issues.find({
            'id': parseInt(req.params.id)
            },
        function (err, result) {
        console.log(JSON.stringify(result));
        res.render('issueView.jade', {
            issues: result
        });
        });
    });
}
