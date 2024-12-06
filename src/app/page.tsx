"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface AssistantResult {
  name: string;
  id?: string;
  status: "success" | "error";
  message?: string;
}

export default function AssistantCreator() {
  const [assistants, setAssistants] = useState("");
  const [result, setResult] = useState<AssistantResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const parsedAssistants = JSON.parse(assistants);
      const response = await fetch("/api/create-assistants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedAssistants),
      });

      if (!response.ok) {
        throw new Error("Failed to create assistants");
      }

      const creationResult = await response.json();
      setResult(creationResult);
    } catch (error) {
      setResult([
        { name: "Error", status: "error", message: (error as Error).message },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">OpenAI Assistant Creator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          value={assistants}
          onChange={(e) => setAssistants(e.target.value)}
          placeholder="Paste your array of assistant objects here..."
          className="h-64"
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Assistants"}
        </Button>
      </form>
      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Result:</h2>
          <div className="space-y-4">
            {result.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-semibold">{item.name}</h3>
                <p>Status: {item.status}</p>
                {item.id && <p>ID: {item.id}</p>}
                {item.message && <p>Error: {item.message}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
