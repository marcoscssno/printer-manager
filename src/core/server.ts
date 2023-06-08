import { app } from "./app";
import { PORT } from "@shared/environment";

app.listen(PORT || 3000);
