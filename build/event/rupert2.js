"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.on("messageCreate", async (message) => {
        if (message.author.id === client.user?.id)
            if (Math.random() < 0.98)
                return;
        if (Math.random() >= 0.99) {
            message.reply({ content: "ok thats crazy" });
            return;
        }
        message.reply({ content: "" });
    });
};
