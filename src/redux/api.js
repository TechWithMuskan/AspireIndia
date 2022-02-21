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
        let data = JSON.parse(request.requestBody);
        server.db.loadData({
          amount: data,
        });
        return data;
      });

      this.get("/api/spending-limit", async () => {
        const response = {
          spLimit:
            (await (server.db.amount &&
              server.db.amount[server.db.amount?.length - 1])) || null,
        };
        return response;
      });

      this.get("/api/spent-limit", () => {
        const response = {
          spent: server.db.spent || 3450,
        };
        return response;
      });
    },
  });
};

export default startMockServer;
