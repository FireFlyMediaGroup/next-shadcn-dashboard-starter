'use client';

/**
 * PLACEHOLDER COMPONENT - SKYSPECS OVERVIEW
 * This is a temporary component using shared components from the main overview page.
 * Replace with SkySpecs-specific implementation.
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

export default function ICOverview() {
  return (
    <div className="space-y-4">
      {/* Metrics Cards */}
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
            <p className="text-xs text-muted-foreground">As of 24 OCT 2024</p>
          </CardContent>
        </Card>
        {/* Add remaining cards with the same structure */}
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <BarGraph />
        </div>
        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
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
