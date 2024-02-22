import Featured_courses from "@/components/shared/Featured_courses";
import HeroSection from "@/components/shared/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featured_courses />
    </main>
  );
}
