"use client";

import { Tile, Button } from "@carbon/react";
import { useParams, useRouter } from "next/navigation";

export default function GrievanceDetail() {
  const { id } = useParams();
  const router = useRouter();

  // Hardcoded single grievance (in real case, fetch by ID)
  const grievance = {
    id,
    category: "Road",
    district: "Kathmandu",
    ward: "5",
    date: "2025-09-08",
    description: "Big potholes on the main road causing traffic jams.",
    status: "Pending",
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Grievance Details</h1>
      <Tile className="space-y-2">
        <p>
          <strong>Ticket ID:</strong> {grievance.id}
        </p>
        <p>
          <strong>Category:</strong> {grievance.category}
        </p>
        <p>
          <strong>District:</strong> {grievance.district}
        </p>
        <p>
          <strong>Ward:</strong> {grievance.ward}
        </p>
        <p>
          <strong>Date:</strong> {grievance.date}
        </p>
        <p>
          <strong>Status:</strong> {grievance.status}
        </p>
        <p>
          <strong>Description:</strong> {grievance.description}
        </p>
      </Tile>
      <div className="mt-6">
        <Button kind="secondary" onClick={() => router.push("/my-grievances")}>
          Back to List
        </Button>
      </div>
    </main>
  );
}
