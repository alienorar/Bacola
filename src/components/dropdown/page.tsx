import { getCategories } from "@/service/queries";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export async function DropdownMenuCheckboxes() {
    const data = await getCategories();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-blue-400 rounded-full text-white border-transparent w-[213px] h-[50px] py-[20px]"
                >
                    All categories
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
             
                    {data.results?.map((item: any) => (
                        <DropdownMenuCheckboxItem key={item.id} >{item.title}   </DropdownMenuCheckboxItem>
                    ))}

             
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
