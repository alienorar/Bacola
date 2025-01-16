import { getSubCategories } from "@/service/queries";
import Image from "next/image";
import Link from "next/link";

const SubLinks = async () => {
    const data = await getSubCategories();

    return (
        <nav className="flex gap-4">
            {data.results?.map((item) => (
                <Link
                    key={item.id}
                    href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-4 flex items-center py-2 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition duration-200"
                >
        <Image
                        src={item.image}
                        alt="Description of the image"
                        width={22}
                        height={22}
                        objectFit="contain"
                        priority />
                    {item.title}
                </Link>
            ))}
        </nav>
    );
};

export default SubLinks;
