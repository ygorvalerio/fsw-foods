import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <div className="flex justify-between py-6 px-5">
        <Image src="/logo.png" alt="FSW FOODS" height={30} width={100}/>

    <Button 
        size="icon" 
        variant="link" 
        className="bg-none bg-transparent">
        
        <MenuIcon/>
    </Button>
        </div>
      );
};
 
export default Header;