var app = {
    init: function() {
        $('#subscribe').click(function() {
            app.PushWoosh.registerDevice();
        });

        $('#unsubscribe').click(function() {
            app.PushWoosh.unregisterDevice();
        });
    }
};
