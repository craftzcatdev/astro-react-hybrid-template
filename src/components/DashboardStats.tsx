import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Stat {
  label: string;
  value: number;
  change: string;
}

export function DashboardStats() {
  const [stats, setStats] = useState<Stat[]>([
    { label: "Total Users", value: 1234, change: "+12%" },
    { label: "Revenue", value: 45678, change: "+23%" },
    { label: "Active Sessions", value: 89, change: "-5%" },
  ]);

  const refreshStats = () => {
    toast.info("Refreshing stats...");
    setTimeout(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value: stat.value + Math.floor(Math.random() * 100),
        })),
      );
      toast.success("Stats updated!");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <Button onClick={refreshStats} variant="outline">
          Refresh Stats
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">
              {stat.value.toLocaleString()}
            </p>
            <p
              className={`text-sm mt-1 ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
            >
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
