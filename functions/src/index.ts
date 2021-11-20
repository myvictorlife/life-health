import * as functions from "firebase-functions";
import * as cors from "cors";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const lifeInfo = functions.https.onRequest((request, response) => {
  cors()(request, response, () => {
    functions.logger.info("Get LIFE Info", {structuredData: true});
    return response.json({
      name: "LIFE FE",
      version: "1.0.0",
    });
  });
});
