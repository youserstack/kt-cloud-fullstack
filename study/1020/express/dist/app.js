"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/posts", postRoutes_1.default);
app.listen(3000, () => {
    console.log("server is running on port 3000.");
});
console.log("asdasd");
//
