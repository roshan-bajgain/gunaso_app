"use client";

import { Button, Tile } from "@carbon/react";
import Link from "next/link";

export default function MyGrievances() {
  // Hardcoded grievance list
  const grievances = [
    { id: "1001", status: "Pending" },
    { id: "1002", status: "Resolved" },
    { id: "1003", status: "Closed" },
  ];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Grievances</h1>
      <div className="space-y-4">
        {grievances.map((g) => (
          <Tile key={g.id} className="flex justify-between items-center">
            <div>
              <p>
                <strong>Ticket no:</strong> {g.id}
              </p>
              <p>Status: {g.status}</p>
            </div>
            <Link href={`/my-grievances/${g.id}`}>
              <Button size="sm">View Details</Button>
            </Link>
          </Tile>
        ))}
      </div>
    </main>
  );
}
