import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import IntroSection from '@/components/sections/IntroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import VideoSection from '@/components/sections/VideoSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <IntroSection />
      <ServicesSection />
      <VideoSection />
      <TestimonialsSection />
    </main>
  );
}
