import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { RisksSection } from "@/components/sections/RisksSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { VideoVerticalSection } from "@/components/sections/VideoVerticalSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoVerticalSection />
      <ClientsSection />
      <RisksSection />
      <MethodSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
