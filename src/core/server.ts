import { app } from "./app";
import { PORT } from "@shared/environment";
import { mongoDBHelper } from "@helper/MongoDBHelper";
import { MONGODB_URI } from "@shared/environment";

(async () => {
    try {
        await mongoDBHelper.connect(MONGODB_URI);
    }
    catch (error) {
        throw new Error(error);
    }
    app.listen(PORT || 3000);
})();
