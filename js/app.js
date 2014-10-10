var app = {
    $(document).ready(function() {
        $('#subscibe').click(function() {
            app.PushWoosh.registerDevice();
        });

        $('#unsubscibe').click(function() {
            app.PushWoosh.unregisterDevice();
        });
    })
    
};
