import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface DashBoardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashBoardPageProps> = async (params) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Overview of your store" />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
             
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
