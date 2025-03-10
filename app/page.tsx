import { CHART_CATEGORIES } from '@/lib/chart-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold mb-3">Preflop Goat</h1>
        <p className="text-2xl text-muted-foreground">Your pocket guide to optimal preflop play</p>
      </div>

      <div className="felt-bg rounded-lg p-8 mb-8">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Select Your Situation</h2>
          <p className="text-xl text-white/80 mb-8">Choose the type of preflop situation you're facing to see the recommended strategy.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHART_CATEGORIES.map((category) => (
              <Card key={category.type} className="border-felt/20 bg-white/95">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-lg">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.items?.map((item) => {
                      // Extract abbreviations or short names
                      let buttonText = item.title;
                      
                      if (item.heroPosition) {
                        if (item.type === 'RFI') {
                          buttonText = item.heroPosition;
                        } else if (item.villainPosition) {
                          buttonText = `${item.heroPosition} vs ${item.villainPosition}`;
                        }
                      }
                      
                      return (
                        <Link key={item.filename} href={`/charts/${item.filename}`}>
                          <Button 
                            variant="outline" 
                            className="w-full h-16 text-lg font-medium"
                            title={item.title}
                          >
                            {buttonText}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center text-muted-foreground text-sm">
        <p>Preflop Goat © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}