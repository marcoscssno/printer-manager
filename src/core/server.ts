import { PORT } from "@shared/environment";
import { app } from "./app";

app.listen(PORT || 3000);
