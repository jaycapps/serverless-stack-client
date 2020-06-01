// export default {
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_ADseGMWLOxRNkupmK8RlRLoq00gj0Rr2dO",
//     s3: {
//       REGION: "us-east-1",
//       BUCKET: "julianhcapps-notes-app-bucket"
//     },
//     apiGateway: {
//       REGION: "us-east-1",
//       URL: "https://hmmce71frd.execute-api.us-east-1.amazonaws.com/prod"
//     },
//     cognito: {
//       REGION: "us-east-1",
//       USER_POOL_ID: "us-east-1_8p2WMqnLO",
//       APP_CLIENT_ID: "73jhfgp8uvuhcbogtctuh77d90",
//       IDENTITY_POOL_ID: "us-east-1:d7a25001-f5c9-43ba-8bc7-a44027d215af"
//     }
//   };

  const dev = {
    STRIPE_KEY: "pk_test_ADseGMWLOxRNkupmK8RlRLoq00gj0Rr2dO",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-4zyzcixgnxuv"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://erges47vkb.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_9mkPXzeNj",
      APP_CLIENT_ID: "6h09le3h5bnhp213i94b6iffbt",
      IDENTITY_POOL_ID: "us-east-1:c9f7830b-f185-4dc0-adf3-9ad8b26b82af"
    }
  };

  const prod = {
    STRIPE_KEY: "pk_test_ADseGMWLOxRNkupmK8RlRLoq00gj0Rr2dO",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-1p54ja0jjehpw"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://eahzhpf14m.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_fM1d9Dsi2",
      APP_CLIENT_ID: "241t13t6a2gatglqv9vmp8jkac",
      IDENTITY_POOL_ID: "us-east-1:c698a6c8-cbf6-49ea-9672-f7fa1e40b8a3"
    }
  };

  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };