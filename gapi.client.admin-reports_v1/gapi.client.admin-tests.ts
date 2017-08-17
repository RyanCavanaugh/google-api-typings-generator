/* This is stub file for gapi.client.admin definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('admin', 'reports_v1', () => {
        // now we can use gapi.client.admin
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View audit reports for your G Suite domain
                'https://www.googleapis.com/auth/admin.reports.audit.readonly',
            
                // View usage reports for your G Suite domain
                'https://www.googleapis.com/auth/admin.reports.usage.readonly',
            ];
        const immediate = true;

        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /* handle succesfull authorization */
                run();
            } else {
                /* handle authorization error */
            }
        }); 
    });

    async function run() {  
    
        /* 
        Retrieves a list of activities for a specific customer and application.  
        */
        await gapi.client.activities.list({ applicationName: "applicationName", userKey: "userKey",  }); 
    
        /* 
        Push changes to activities  
        */
        await gapi.client.activities.watch({ applicationName: "applicationName", userKey: "userKey",  }); 
    
        /* 
        Stop watching resources through this channel  
        */
        await gapi.client.channels.stop({  }); 
    
        /* 
        Retrieves a report which is a collection of properties / statistics for a specific customer.  
        */
        await gapi.client.customerUsageReports.get({ date: "date",  }); 
    
        /* 
        Retrieves a report which is a collection of properties / statistics for a set of users.  
        */
        await gapi.client.userUsageReport.get({ date: "date", userKey: "userKey",  });
    }
});