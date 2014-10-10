var app = {};

$(document).ready(function() {
    $('#subscribe').click(function() {
        app.PushWoosh.registerDevice();
    });

    $('#unsubscribe').click(function() {
        app.PushWoosh.unregisterDevice();
    });
})
