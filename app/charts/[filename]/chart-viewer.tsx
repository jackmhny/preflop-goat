'use client';

import { ChartItem } from '@/lib/chart-data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ChartViewerProps {
  chart: ChartItem;
}

export default function ChartViewer({ chart }: ChartViewerProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="bg-white rounded-md p-3 shadow-lg w-full">
      <div className="relative cursor-pointer" onClick={handleClick}>
        <Image
          src={`/images/${chart.filename}`}
          width={2400}
          height={2400}
          alt={chart.title}
          className="w-full h-auto rounded"
          style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
          priority
          quality={100}
        />
        <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-felt transition-opacity flex items-center justify-center">
          <span className="text-white text-3xl font-bold">Click to go back</span>
        </div>
      </div>
    </div>
  );
}