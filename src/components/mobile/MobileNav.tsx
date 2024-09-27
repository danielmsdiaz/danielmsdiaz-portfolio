import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { AlignJustify } from "lucide-react"
import Nav from "../Nav"
import Logo from "../Logo"
import Socials from "../Socials"

import { useState } from "react"

const MobileNav = () => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  const handleCloseSheet = () => {
    setSheetOpen((prev) => !prev)
  }

  return (
    <Sheet open={sheetOpen} onOpenChange={handleCloseSheet}>
      <SheetTrigger asChild>
        <AlignJustify cursor="pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-3">
          <div>
            <Nav onClick={handleCloseSheet} containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-2xl hover:text-primary dark:hover:text-darkMode" />
          </div>
          <Socials />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav