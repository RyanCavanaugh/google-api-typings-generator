/* This is stub file for gapi.client.logging definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('logging', 'v2beta1', () => {
        // now we can use gapi.client.logging
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // Submit log data for your projects
                'https://www.googleapis.com/auth/logging.write',
            
                // View log data for your projects
                'https://www.googleapis.com/auth/logging.read',
            
                // Administrate log data for your projects
                'https://www.googleapis.com/auth/logging.admin',
            
                // View your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform.read-only',
            
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
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
        Lists the descriptors for monitored resource types used by Stackdriver Logging.  
        */
        await gapi.client.monitoredResourceDescriptors.list({  }); 
    
        /* 
        Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.  
        */
        await gapi.client.entries.list({  }); 
    
        /* 
        Writes log entries to Stackdriver Logging.  
        */
        await gapi.client.entries.write({  });
    }
});