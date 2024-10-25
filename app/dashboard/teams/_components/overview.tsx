'use client';

/**
 * PLACEHOLDER COMPONENT - SKYSPECS OVERVIEW
 * This is a temporary component using shared components from the main overview page.
 * Replace this entire component with SkySpecs-specific implementation.
 */

import { AreaGraph } from '../../overview/_components/area-graph';
import { BarGraph } from '../../overview/_components/bar-graph';
import { PieGraph } from '../../overview/_components/pie-graph';
import { RecentSales } from '../../overview/_components/recent-sales';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function TeamsOverview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              SkySpecs Total Inspections
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
            <div className="text-2xl font-bold">15,897</div>
            <p className="text-xs text-muted-foreground">As of 24 OCT 2024</p>
          </CardContent>
        </Card>

        {/* Add remaining metric cards following the same pattern */}
        {/* Copy the other cards from the main overview but update the titles and values */}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <BarGraph />
        </div>
        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Inspections</CardTitle>
            <CardDescription>
              Latest SkySpecs inspection activities
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
    </div>
  );
}
