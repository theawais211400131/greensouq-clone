
import { CategoriesSection } from './CategoriesSection';
import { ProductsSection } from './ProductsSection';
import { OutdoorPlantsSection } from './OutdoorPlantsSection';
import { NewArrivalsSection } from './NewArrivalsSection';
import { GardeningAccessoriesSection } from './GardeningAccessoriesSection';
import { PotsSection } from './PotsSection';
import { SoilSection } from './SoilSection';
import { NewsletterSection } from './NewsletterSection';


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <main>
        {/* <HeroSection /> */}
        <CategoriesSection />
        <ProductsSection />
        <OutdoorPlantsSection />
        <NewArrivalsSection />
        <GardeningAccessoriesSection />
        <PotsSection />
        <SoilSection />
        <NewsletterSection />
      </main>
    </div>
  );
}
