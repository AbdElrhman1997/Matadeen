import { useTranslations } from "next-intl";
import BannerSection from "./Components/BannerSection";
import EventCalnderSection from "./Components/EventCalnderSection";
import LiveSection from "./Components/LiveSection";
import Important_Dates from "./Components/Important_Dates/Important_Dates";
import Overall_Rating from "./Components/Overall_Rating/Overall_Rating";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="">
      <BannerSection />
      <EventCalnderSection />
      <LiveSection />
      <Overall_Rating />
      <Important_Dates />
    </main>
  );
}
