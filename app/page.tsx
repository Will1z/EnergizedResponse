import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ValueProps from "@/components/ValueProps";
import CoreAreas from "@/components/CoreAreas";
import GTMEngine from "@/components/GTMEngine";
import MeetKevin from "@/components/MeetKevin";
import MethodologySection from "@/components/MethodologySection";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ValueProps />
      <CoreAreas />
      <GTMEngine />
      <MeetKevin />
      <MethodologySection />
      <SocialProof />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
