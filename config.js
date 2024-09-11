// Autodesk Platform Services configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
      client_id: process.env.APS_CLIENT_ID,
      client_secret: process.env.APS_CLIENT_SECRET,
      callback_url: process.env.APS_CALLBACK || process.env.APS_CALLBACK_URL,
    },
    scopes:{
        internal :[
            "bucket:create",
            "bucket:read",
            "bucket:delete",
            "data:read",
            "data:create",
            "data:write",
            "code:all",
        ],
        public:["viewables:read"],
        client:{
            circuitBreaker :{
                theshold : 11,
                interval:1200,
            }

        },
        retry: {
            maxNumberOfRetries :7,
            backoffDelay: 4000,
            backoffPolicy: "exponentialBackoffWithJitter"


        },
        requestTimeout: 13000,
    },

};