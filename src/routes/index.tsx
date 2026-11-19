import { createFileRoute } from "@tanstack/react-router";
import { MemberDashboard } from "@/components/member/member-dashboard";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <MemberDashboard />;
}
