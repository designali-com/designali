import { ActivityIcon, GlobeIcon, SearchIcon } from "lucide-react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"

const settings = [
  {
    id: "profile",
    icon: GlobeIcon,
    title: "Public profile",
    description: "Anyone can see your name and bio.",
    on: true,
  },
  {
    id: "activity",
    icon: ActivityIcon,
    title: "Show activity status",
    description: "Let teammates see when you are online.",
    on: true,
  },
  {
    id: "search",
    icon: SearchIcon,
    title: "Appear in search",
    description: "Allow people to find you by email.",
    on: false,
  },
]

export default function PrivacySettingsItems() {
  return (
    <ItemGroup className="w-full max-w-md gap-2">
      {settings.map((setting) => (
        <Item
          key={setting.id}
          variant="outline"
          render={<label htmlFor={"privacy-" + setting.id} />}
        >
          <ItemMedia variant="icon">
            <setting.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{setting.title}</ItemTitle>
            <ItemDescription>{setting.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Checkbox
              id={"privacy-" + setting.id}
              defaultChecked={setting.on}
            />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
