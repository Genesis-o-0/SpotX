import { Suspense } from "react";
import SearchBar from "./_components/SearchBar";
import AppSections from "./sections/AppSections";
import Loading from "./_components/shared/Loading";
import { getUiBuilders } from "@/utils/getUiBuilders";
import getSectionsdata from "@/utils/getSectionsdata";

export default async function Home() {
  const uiBuildersConfig = await getUiBuilders();
  const uiBuildersData = uiBuildersConfig.data;
  const sectionsData = uiBuildersData.map(async (section) => {
    const data = await getSectionsdata(section.content, section.filters);
    return { [section.content]: data, title: section.description };
  });

  const resolvedSectionsData = await Promise.all(sectionsData).then((data) => {
    return data;
  });

  return (
    <main>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        {resolvedSectionsData.map((section) => {
          return <AppSections key={section.title} sectionData={section} />;
        })}
      </Suspense>
    </main>
  );
}
