// Insert this as a system script include
//

var SlackMessageNotifier = Class.create();
SlackMessageNotifier.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    type: 'SlackMessageNotifier',
    'sendMessage': function (message) {
        // Create and send the REST Message
        var r = new sn_ws.RESTMessageV2('Slack', 'get');
        r.setStringParameter('text', message);
        var response = r.execute();
        return response;
    },
});