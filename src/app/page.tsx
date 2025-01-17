import Banner from "@/components/banner/page";
import { getBanners } from "@/service/queries";


export default async function Home() {
  const data = await getBanners()

  return (
    <div className="flex ">
      <Banner banners={data}/>
    </div>
  );
}
