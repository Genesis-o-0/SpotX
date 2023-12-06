import { Suspense } from "react";
import SearchBar from "./_components/SearchBar";
import getSectionsdata from "@/utils/getSectionsdata";
import AppSections from "./sections/AppSections";
import Loading from "./_components/shared/Loading";
import { getUiBuilders } from "@/utils/getUiBuilders";

export default async function Home() {
  // getting configuration data from UI-Builders API
  const uiBuildersConfig = await getUiBuilders();
  const sections = uiBuildersConfig.data;
  const sectionsData = sections.map(async (section) => {
    const resolved = await getSectionsdata(section.content, section.filters);
    return { [section.title]: resolved };
  });

  const resolvedSectionsData = await Promise.all(sectionsData).then((data) => {
    return data;
  });

  return (
    <main>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        {resolvedSectionsData.map((section, index) => {
          return <AppSections key={index} data={section} />;
        })}
      </Suspense>
    </main>
  );
}
