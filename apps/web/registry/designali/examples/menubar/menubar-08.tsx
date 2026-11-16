import {
  Archive as ArchiveIcon,
  FileText as FileTextIcon,
  Forward as ForwardIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  MailOpen as MailOpenIcon,
  ReplyAll as ReplyAllIcon,
  Reply as ReplyIcon,
  Send as SendIcon,
  ShieldAlert as ShieldAlertIcon,
  Star as StarIcon,
  Tag as TagIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function EmailMessageMenubar() {
  return (
    <div className="w-full max-w-sm">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Message</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <ReplyIcon /> Reply <MenubarShortcut>R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <ReplyAllIcon /> Reply all <MenubarShortcut>⇧R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <ForwardIcon /> Forward <MenubarShortcut>F</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <TagIcon /> Mark as
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>
                      <MailOpenIcon /> Read
                    </MenubarItem>
                    <MenubarItem>
                      <MailIcon /> Unread
                    </MenubarItem>
                    <MenubarItem>
                      <StarIcon /> Important
                    </MenubarItem>
                    <MenubarItem>
                      <ShieldAlertIcon /> Spam
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <ArchiveIcon /> Archive <MenubarShortcut>E</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem variant="destructive">
                <Trash2Icon /> Delete <MenubarShortcut>⌫</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Mailbox</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <InboxIcon /> Inbox
              </MenubarItem>
              <MenubarItem>
                <SendIcon /> Sent
              </MenubarItem>
              <MenubarItem>
                <FileTextIcon /> Drafts
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
