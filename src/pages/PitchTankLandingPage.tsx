import React, { useState, useEffect } from "react";
import SignupModal from "@/components/Modals/SignupModal";
import { useGA4Analytics } from "@/hooks/useGA4Analytics";

// Types and interfaces
interface ResponsiveImageProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}

// Reusable Components
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  mobileSrc,
  desktopSrc,
  alt,
  className = "",
  width,
  height,
}) => (
  <>
    <img
      src={mobileSrc}
      alt={alt}
      className={`${className} md:hidden`}
      loading="lazy"
      width={width}
      height={height}
    />
    <img
      src={desktopSrc}
      alt={alt}
      className={`${className} hidden md:block`}
      loading="lazy"
      width={width}
      height={height}
    />
  </>
);

const FeatureImage: React.FC<{
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
}> = ({ mobileSrc, desktopSrc, alt }) => (
  <div className="flex justify-center">
    <ResponsiveImage
      mobileSrc={mobileSrc}
      desktopSrc={desktopSrc}
      alt={alt}
      className="w-auto h-auto"
    />
  </div>
);

const FEATURE_IMAGES = [
  {
    mobile: "/Structured.svg",
    desktop: "/Structured support.svg",
    alt: "Structured Support",
  },
  {
    mobile: "/Ai enabled (1).svg",
    desktop: "/AI enabled.svg",
    alt: "AI Enabled",
  },
  { mobile: "/Acess to.svg", desktop: "/Group 88.svg", alt: "Access To" },
  { mobile: "/Demo day (1).svg", desktop: "/Demo day.svg", alt: "Demo Day" },
];

// Styles
const styles = {
  heroBackground: { backgroundImage: "url('/Top card.svg')" },
  sectionBackground: { backgroundColor: "#021959" },
  statsGradient: {
    background:
      "linear-gradient(91.91deg, #3CE5B4 0.19%, #114DFF 39.48%, #031F75 98.29%)",
  },
  buttonStyle: {
    backgroundColor: "#3ae5a7",
    color: "#021959",
  },
};

const PitchTankLandingPage: React.FC = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const { trackPitchTankEvent, trackButtonClick } = useGA4Analytics();

  // Track page view on component mount
  useEffect(() => {
    trackPitchTankEvent("landing_view", "hero_section");
  }, [trackPitchTankEvent]);

  const handleStartApplication = () => {
    // Track button click
    trackButtonClick("start_application", "pitch_tank_landing", {
      button_location: "hero_section",
      user_action: "cta_click",
    });

    // Track pitch tank event
    trackPitchTankEvent("form_start", "application_modal");

    setIsSignupModalOpen(true);
  };

  return (
    <div className="min-h-screen" style={styles.sectionBackground}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={styles.heroBackground}
      >
        <div className="relative z-10 flex items-center justify-center pt-10 pb-28 md:py-28">
          <div className="w-11/12 mx-auto px-4 text-center">
            {/* Welcome Heading */}
            <h1
              className="font-bold text-white mb-2 md:mb-8 tracking-wider leading-tight"
              style={{
                fontSize: "20px",
                lineHeight: "1.2",
              }}
            >
              <span className="tracking-widest">W E L C O M E</span>
              <span className="mx-2 md:mx-8"></span>
              <span className="tracking-widest">T O</span>
              <style>
                {`@media (min-width: 768px) { h1 { font-size: 36px !important; } }`}
              </style>
            </h1>

            {/* Pitch Tank Logo */}
            <div className="mb-4 md:mb-12">
              <img
                src="/Pitch tank logo.svg"
                alt="Pitch Tank Logo"
                className="w-auto mx-auto"
                loading="eager"
              />
            </div>

            {/* Tagline */}
            <div className="mb-2 md:mb-6">
              <h2 className="text-lg md:text-2xl font-bold text-white leading-tight">
                WHERE STARTUPS GET REAL.
                <br />
                AND REAL STARTUPS GET FUNDED.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pitch Tank Section */}
      <section
        className="relative py-8 md:py-16"
        style={styles.sectionBackground}
      >
        {/* Stats Bridge Section */}
        <div className="relative z-10 -mt-24 md:-mt-40">
          <div className="w-11/12 mx-auto px-4">
            <div>
              {/* Desktop Image */}
              <div className="hidden md:flex justify-center">
                <img
                  src="/pitch-tank-highlights-desktop.svg"
                  alt="Pitch Tank Stats"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* Mobile Image */}
              <div className="md:hidden flex justify-center">
                <img
                  src="/pitch-tank-highlights-mobile.svg"
                  alt="Pitch Tank Stats"
                  className="w-full h-auto"
                  loading="lazy"
                />
                _{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-11/12 mx-auto px-4 text-center">
          <div className="pt-24 md:pt-32">
            {" "}
            {/*Text Content */}
            <p className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto">
              Pitch Tank is our startup discovery engine. Founders complete the
              Pitch Tank form, and if there is a good mutual fit, startups can
              enter either our 10-Week Acceleration Program or Co-Build with us
              in our Venture Studio.
            </p>
            {/*Button- StartApplication */}
            <div className="mt-8 md:mt-12">
              <button
                onClick={handleStartApplication}
                className="px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={styles.buttonStyle}
              >
                Start Your Application
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/*Unicorn Operator Edge SVGs */}
        <div className="mt-16 md:mt-24">
          {/* Desktop SVG */}
          <div className="hidden md:block">
            <img
              src="/The Unicorn Operator Edge desktop.svg"
              alt="The Unicorn Operator Edge"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
          </div>
          {/* Mobile SVG */}
          <div className="md:hidden">
            <img
              src="/The Unicorn Operator Edge mobile.svg"
              alt="The Unicorn Operator Edge"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/*Track Record Section */}
        <div className="w-11/12 mx-auto px-4 text-center mt-20 md:mt-32">
          {" "}
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 md:mb-20">
            Track Record
          </h2>
          {/* Track Record SVG - Desktop */}
          <div className="hidden md:block">
            <img
              src="/track-record-desktop.svg"
              alt="Track Record Stats"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
          </div>
          {/* Track Record SVG - Mobile */}
          <div className="md:hidden">
            <img
              src="/track-record-mobile.svg"
              alt="Track Record Stats"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
          </div>
        </div>
        {/* End: Track Record Section */}

        {/*CFC Accelerator Information */}
        <div className="w-11/12 mx-auto px-4 text-center mt-20 md:mt-32">
          {" "}
          {/*SVG - Desktop */}
          <div className="hidden md:block">
            <img
              src="/cfc-accelerator-desktop.svg"
              alt="CFC Accelerator"
              className="w-full h-auto mx-auto max-w-4xl"
              loading="lazy"
            />
          </div>
          {/*SVG - Mobile */}
          <div className="md:hidden">
            <img
              src="/cfc-accelerator-mobile.svg"
              alt="CFC Accelerator"
              className="w-full h-auto mx-auto max-w-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* CFC Venture Studio Section */}
        <div className="text-center mt-20 md:mt-32">
          {/*DESKTOP VIEW */}
          <div className="hidden md:block relative">
            {/* Main Content SVG (Desktop) */}
            <img
              src="/cfc-venture-studio-desktop.svg" // Main desktop content SVG
              alt="CFC Venture Studio Offerings"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
            {/* Manual HTML Button (Desktop) */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
              {" "}
              <button
                onClick={handleStartApplication}
                className="px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={styles.buttonStyle}
              >
                Start Your Application
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </button>
            </div>
          </div>
          {/* END DESKTOP VIEW*/}

          {/*MOBILE VIEW */}
          <div className="md:hidden relative pb-10">
            {/* Main Content SVG (Mobile) */}
            <img
              src="/cfc-venture-studio-mobile.svg" // Main mobile content SVG
              alt="CFC Venture Studio Offerings"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
            {/* Manual HTML Button (Mobile) */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2">
              {" "}
              <button
                onClick={handleStartApplication}
                className="px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={styles.buttonStyle}
              >
                Start Your Application
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </button>
            </div>
          </div>
          {/*  END MOBILE VIEW  */}
        </div>
        {/* End New: CFC Venture Studio Section */}

        {/*About CoFounder Circle Section */}
        <div className="text-center mt-20 md:mt-32">
          {" "}
          {/*SVG - Desktop */}
          <div className="hidden md:block">
            <img
              src="/about-coFounderCircle-desktop.svg"
              alt="About CoFounder Circle AI-Native Acceleration Platform"
              className="w-full h-auto mx-auto max-w-5xl"
              loading="lazy"
            />
          </div>
          {/*SVG - Mobile */}
          <div className="md:hidden">
            <img
              src="/about-coFounderCircle-mobile.svg"
              alt="About CoFounder Circle AI-Native Acceleration Platform"
              className="w-full h-auto mx-auto max-w-md"
              loading="lazy"
            />
          </div>
          {/* New Darpan Sanghvi Bio/Link */}
          <p className="text-white text-lg md:text-xl leading-snug max-w-4xl mx-auto mt-12 md:mt-16 mb-20 md:mb-32 font-semibold px-4">
            {/* Applied font-semibold to the entire paragraph for more weight */}
            Founded by{" "}
            <a
              href="/darpansanghvi"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Darpan Sanghvi
            </a>
            , an entrepreneur who built and lost a Unicorn,
            <span className="text-[#3AE5A7]">
              {" "}
              {/* Highlighted mission statement with accent color */}
              CoFounder Circle is on a mission to democratise entrepreneurship.
            </span>
          </p>
        </div>
        {/* End- About CoFounder Circle Section */}

        {/*Ready to Get Started Section */}
        <div className="text-center">
          {" "}
          {/* Separating Blue Line */}
          <div className="h-px w-full bg-blue-500 mb-20 md:mb-32"></div>{" "}
          {/* SVG - Desktop */}
          <div className="hidden md:block">
            <img
              src="/ready-to-get-started-desktop.svg"
              alt="Ready to Get Started"
              className="w-full h-auto mx-auto max-w-4xl"
              loading="lazy"
            />
          </div>
          {/*SVG - Mobile */}
          <div className="md:hidden">
            <img
              src="/ready-to-get-started-mobile.svg"
              alt="Ready to Get Started"
              className="w-full h-auto mx-auto max-w-md"
              loading="lazy"
            />
          </div>
        </div>
        {/* End- Ready to Get Started Section */}

        {/*What Happens Next Section */}
        <div className="text-center mt-20 md:mt-32">
          {" "}
          {/* Heading */}
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 md:mb-16">
            What happens next?
          </h3>
          {/* 3 Points SVG - Desktop */}
          <div className="hidden md:block">
            <img
              src="/what-happens-next-desktop.svg"
              alt="What Happens Next Steps"
              className="w-11/12 h-auto mx-auto max-w-5xl mb-16 md:mb-24"
              loading="lazy"
            />
          </div>
          {/* 3 Points SVG - Mobile */}
          <div className="md:hidden">
            <img
              src="/what-happens-next-mobile.svg"
              alt="What Happens Next Steps"
              className="w-11/12 h-auto mx-auto max-w-md mb-16 md:mb-24"
              loading="lazy"
            />
          </div>
          {/* Start Your Application Button */}
          <div className="mt-10 md:mt-16 mb-20 md:mb-32">
            {" "}
            <button
              onClick={handleStartApplication}
              className="px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={styles.buttonStyle}
            >
              Start Your Application
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </button>
          </div>
        </div>
        {/* End - What Happens Next Section */}
      </section>

      {/* Signup Modal */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        redirectPath="/pitch-tank-form"
      />
    </div>
  );
};

export default PitchTankLandingPage;
