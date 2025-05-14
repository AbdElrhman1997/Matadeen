import { useTranslations } from "next-intl";
import BannerSection from "./Components/BannerSection";
import EventCalnderSection from "./Components/EventCalnderSection";
import LiveSection from "./Components/LiveSection";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="min-h-screen">
      <BannerSection />
      <EventCalnderSection />
      <LiveSection />
    </div>
  );
}
