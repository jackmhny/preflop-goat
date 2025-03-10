import { getChartByFilename } from '@/lib/chart-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ChartViewer from './chart-viewer';

interface ChartPageParams {
  filename: string;
}

interface PageProps {
  params: ChartPageParams;
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function ChartPage({ params }: PageProps) {
  const { filename } = params;
  const chart = getChartByFilename(filename);
  
  if (!chart) {
    notFound();
  }

  return (
    <div className="w-full max-w-full mx-auto flex flex-col items-center">
      <div className="mb-6 w-full max-w-6xl">
        <Link href="/">
          <Button variant="outline" className="mb-3 text-lg px-6 py-3 h-auto">
            ← Back to all charts
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-2">{chart.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{chart.description}</p>
      </div>

      <div className="felt-bg rounded-lg p-4 md:p-6 w-full max-w-[95%]">
        <div className="relative z-10 flex justify-center">
          <ChartViewer chart={chart} />
        </div>
      </div>

      <div className="w-full text-center mt-4">
        <p className="text-lg text-muted-foreground">
          Click the chart to return to the main menu
        </p>
      </div>
    </div>
  );
}