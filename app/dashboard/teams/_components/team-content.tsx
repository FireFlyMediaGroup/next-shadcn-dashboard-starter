// app/dashboard/teams/_components/team-content.tsx
import Team1Content from './team1/team1-content';
import Team2Content from './team2/team2-content';
import Team3Content from './team3/team3-content';
import Team4Content from './team4/team4-content';
import Team5Content from './team5/team5-content';

export default function TeamContent({ teamNumber }: { teamNumber: string }) {
  const teamComponents = {
    'team-1': Team1Content,
    'team-2': Team2Content,
    'team-3': Team3Content,
    'team-4': Team4Content,
    'team-5': Team5Content
  };

  const TeamComponent =
    teamComponents[teamNumber as keyof typeof teamComponents];

  return <TeamComponent />;
}
