'use client';

import { useState } from 'react';
import { AreaGraph } from './area-graph';
import { BarGraph } from './bar-graph';
import { PieGraph } from './pie-graph';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import PageContainer from '@/components/layout/page-container';
import { RecentSales } from './recent-sales';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
// Import vendor components
import SkySpecsOverview from '../../skyspecs/_components/overview';
import TeamsOverview from '../../teams/_components/overview';
import ISightOverview from '../../isight/_components/overview';
import OctocamOverview from '../../octocam/_components/overview';
import ICOverview from '../../independent-contractors/_components/overview';

export default function OverViewPage() {
  // Add state management
  const [selectedTeam, setSelectedTeam] = useState<string>('team-1');
  const [activeTab, setActiveTab] = useState<string>('overview');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value !== 'teams') {
      setSelectedTeam('team-1');
    }
  };

  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="space-y-4"
        >
          <div className="flex items-center space-x-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="skyspecs">SkySpecs</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
              <TabsTrigger value="isight">iSight</TabsTrigger>
              <TabsTrigger value="octocam">Octocam</TabsTrigger>
              <TabsTrigger value="ic">Independent Contractors</TabsTrigger>
            </TabsList>

            {activeTab === 'teams' && (
              <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team-1">Team 1</SelectItem>
                  <SelectItem value="team-2">Team 2</SelectItem>
                  <SelectItem value="team-3">Team 3</SelectItem>
                  <SelectItem value="team-4">Team 4</SelectItem>
                  <SelectItem value="team-5">Team 5</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total WTGs Inspected YTD
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">46,672</div>
                  <p className="text-xs text-muted-foreground">
                    As of 24 OCT 2024
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Global WTG/day avg
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7.62</div>
                  <p className="text-xs text-muted-foreground">
                    +6.8% over 2023
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Refly Rate
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">9.50%</div>
                  <p className="text-xs text-muted-foreground">
                    +5/5% increase over 2023
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Weather Standby
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">17,750.99 hrs.</div>
                  <p className="text-xs text-muted-foreground">
                    2.35 hrs. per Inspection Day
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <BarGraph />
              </div>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
              <div className="col-span-4">
                <AreaGraph />
              </div>
              <div className="col-span-4 md:col-span-3">
                <PieGraph />
              </div>
            </div>
          </TabsContent>
          // In the TabsContent section, replace the placeholder content with:
          {/* Vendor Tab Contents */}
          <TabsContent value="skyspecs" className="space-y-4">
            <SkySpecsOverview />
          </TabsContent>
          <TabsContent value="teams" className="space-y-4">
            <TeamsOverview teamNumber={selectedTeam} />
          </TabsContent>
          <TabsContent value="isight" className="space-y-4">
            <ISightOverview />
          </TabsContent>
          <TabsContent value="octocam" className="space-y-4">
            <OctocamOverview />
          </TabsContent>
          <TabsContent value="ic" className="space-y-4">
            <ICOverview />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
