import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl mb-8">Chart not found</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}