module.exports = function(app) {

    app.get('/event/view/:id', function(req, res) {

        var events = app.db.get('events');

        events.find({
            'id': req.params.id
            }, function (err, result) {

        res.render('eventView.jade', {
            events: result
        });
      });
    });
}
