// app/dashboard/teams/_components/team1/team1-content.tsx
export default function Team1Content() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Team 1 Dashboard</h3>
      <Team1Metrics />
      <Team1Charts />
      <Team1Tables />
    </div>
  );
}
