import {
  BoxesIcon,
  DownloadIcon,
  ListFilterIcon,
  PackageIcon,
  PlusIcon,
  ShoppingBagIcon,
  TagsIcon,
  TicketPercentIcon,
  TruckIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function StoreAdminMenubar() {
  return (
    <div className="w-full max-w-md">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <ShoppingBagIcon className="me-1.5 size-3.5" /> Orders
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> Create draft order
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  <ListFilterIcon /> View by status
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Unfulfilled</MenubarItem>
                    <MenubarItem>Awaiting payment</MenubarItem>
                    <MenubarItem>Refund requested</MenubarItem>
                    <MenubarItem>Completed</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <TruckIcon /> Print shipping labels
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <PackageIcon className="me-1.5 size-3.5" /> Products
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> Add product
              </MenubarItem>
              <MenubarItem>
                <BoxesIcon /> Inventory
              </MenubarItem>
              <MenubarItem>
                <TicketPercentIcon /> Discounts
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <UsersIcon className="me-1.5 size-3.5" /> Customers
          </MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <UserPlusIcon /> Add customer
              </MenubarItem>
              <MenubarItem>
                <TagsIcon /> Segments
              </MenubarItem>
              <MenubarItem>
                <DownloadIcon /> Export list
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
