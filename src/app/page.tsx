import Banner from "@/components/banner/page";
import Products from "@/components/products/page";
import { getBanners } from "@/service/queries";


export default async function Home() {
  const data = await getBanners()

  return (
    <div className="flex flex-col container justify-end ">
      <Banner banners={data}/>
      <Products/>
    </div>
  );
}
