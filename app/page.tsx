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
    console.log(section.title);

    return { [section.content]: resolved, title: section.description };
  });

  const resolvedSectionsData = await Promise.all(sectionsData).then((data) => {
    return data;
  });
  // console.log(resolvedSectionsData);

  return (
    <main>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        {resolvedSectionsData.map((section, index) => {
          return <AppSections key={section.title} sectionData={section} />;
        })}
      </Suspense>
    </main>
  );
}
