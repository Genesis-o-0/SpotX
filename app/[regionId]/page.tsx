type Props = {
  params: {
    regionId: string;
  };
};

function page({ params: { regionId } }: Props) {
  return <div>page</div>;
}

export default page;
