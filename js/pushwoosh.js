document.addEventListener("deviceready", function(){

    app.PushWoosh = (function(){

        var pushNotification = window.plugins.pushNotification,
            NAME_TAG_LIST = "pushitems",
            GOOGLE_PROJECT_ID = "543278631883",
            PUSHWOOSH_APP_ID  = "38E5F-4D43C";


        // initialiazation
        function init() {
            pushNotification.onDeviceReady();
        }
        
        
        function registerDevice() {
            alert('before registering device');
            alert(pushNotification);
            alert(pushNotification.registerDevice);
            // registering device in service
            pushNotification.registerDevice({ projectid: GOOGLE_PROJECT_ID, appid : PUSHWOOSH_APP_ID },
                function(status) {
                    //disable sound and vibration
                    pushNotification.setSoundType(1);
                    pushNotification.setVibrateType(1);
                    
                    //set multi notificaiton mode
                    pushNotification.setMultiNotificationMode();
                    
                    alert('The Device is registered for receiving push notifications');
                },
                function(status) {
                    alert('The Device is unregistered for receiving push notifications');
                }
            );
            
            document.addEventListener('push-notification', onPushHappen);
        }
        
        
        function onPushHappen(event) {
            alert('push happened');
             var title       = event.notification.title,
                userData    = event.notification.userdata,
                pushData    = JSON.parse(userData),
                pushID      = pushData.Guid,
                pushType    = pushData.Type;               
             
            if (pushID && pushType) {
                pushRedirect(pushID, pushType);
            }
        }
        
        function pushRedirect(pushID, pushType){
            
            switch(pushType) {
                case 'news':
                    window.location = '#articles_slider/latest-news/'+pushID;
                    break;
                case 'event':
                    window.location = '#event/calendar/'+pushID;
                    break;
                case 'static':
                    window.location = '#articles_slider/latest-news/'+pushID;
                    break;
                case 'gallery':
                    window.location = '#gallery/galleries/'+pushID;
                    break; 
                default:
                    window.location = '#event/calendar/'+pushID;
                    break;
            }
        }
        
        


        function setTags(tagsList) {
            var tagObj = {};
            tagObj[NAME_TAG_LIST] = tagsList;


            //setting list tags
            pushNotification.setTags(tagObj, function(status) {
                alert('Tak, dine præferencer indstillet');
            }, function(status) {
            });
        }




        function unregisterDevice() {
            document.removeEventListener('push-notification', onPushHappen);
            
            pushNotification.unregisterDevice(function(status) {
                alert(status);
            }, function(error) {
                alert(error);
            });
        }




        return {
            init: init,
            setTags: setTags,
            registerDevice: registerDevice,
            unregisterDevice: unregisterDevice
        }


    })();
    
    
    app.PushWoosh.init();
    app.init();
    
    
}, true);