"use client";

const { ColumnDef } = require("@tanstack/react-table");

// This object defines the shape of our data.
// Note: JavaScript doesn't support type annotations like TypeScript.
exports.Payment = {
  id: "", // Sample value for demonstration purposes
  amount: 0, // Sample value for demonstration purposes
  status: "pending", // Sample value for demonstration purposes
  email: "", // Sample value for demonstration purposes
};

exports.columns = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
