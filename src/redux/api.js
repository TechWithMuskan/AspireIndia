import { createServer } from "miragejs";

const startMockServer = () => {
  if (window.server) {
    server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.get("/api/balance", () => {
        const response = {
          balance: server.db.balance || 3000,
        };
        return response;
      });

      this.get("/api/card-detail", () => {
        const card = {
          cardHolder: "Mark Henry",
          cardNum: 5647341124132020,
          thru: "12/20",
          cvv: 456,
        };
        return card;
      });

      this.post("/api/spending-limit", (schema, request) => {
        let limit = JSON.parse(request.requestBody);
        server.db.loadData({
          amount: { spLimit: limit },
        });
        return limit;
      });

      this.get("/api/spending-limit", async () => {
        const response = {
          spendingAmount:
            (await (server.db.amount && server.db.amount[0])) || null,
        };
        return response;
      });
    },
  });
};

export default startMockServer;
