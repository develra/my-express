module.exports = function(app) {

    app.get('/event/list', function(req, res) {

        var events = app.db.get('events');

        events.find({}, {
            limit: 20
        }, function (err, result) {

        res.render('eventList.jade', {
            events: result
        });
      });
    });
}
