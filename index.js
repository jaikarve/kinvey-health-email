const sdk = require('kinvey-flex-sdk');
const nodemailer = require('nodemailer');

sdk.service((err, flex) => {
    // code goes here

    const flexFunctions = flex.functions;

    function sendEmail(context, complete, modules) {
        const email = modules.email;
        email.send("jai.karve@progress.com",
         "rick.montgomery@progress.com",
         "ID Card Retrieval",
         "You have retrieved your insurance card details for " +
         context.body.subscriber.first_name + " " +
         context.body.subscriber.last_name + "Group Number: " +
         context.body.subscriber.group_number + "Payer: " +
         context.body.payer.name, 
         function(err, result) {
             if (err) {
                 complete().setBody("Could not complete request").runtimeError().done();
             }
            complete().ok().next();
        });
    }

    flexFunctions.register("sendEmailHandler", sendEmail);
});