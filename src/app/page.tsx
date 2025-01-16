import Banner from "@/components/banner/page";
import { getBanners } from "@/service/queries";


export default async function Home() {
  const data = await getBanners()
console.log(data);


  return (
    <div>
      <Banner banners={data} />
    </div>
  );
}
