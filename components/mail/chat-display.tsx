import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "@/lib/auth-client";
import { ParsedMessage } from "@/types";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ChatDisplayProps {
  emailData: ParsedMessage[];
  className?: string;
}

const stripEmailBrackets = (email: string) => {
  return email.replace(/^\s*<|>\s*$/g, "").trim();
};

export function ChatDisplay({ emailData, className }: ChatDisplayProps) {
  const { data: session } = useSession();

  return (
    <ScrollArea className={cn("h-full flex-1 px-4", className)}>
      <div className="flex flex-col space-y-6">
        {emailData.map((email, index) => {
          const senderEmail = stripEmailBrackets(email.sender.email);
          const isMe = senderEmail === session?.user.email;
          return (
            <div
              key={index}
              className={cn("group flex w-full gap-2", isMe ? "flex-row-reverse" : "flex-row")}
            >
              <Avatar className={cn("mt-1 h-8 w-8", isMe ? "ml-2" : "mr-2")}>
                <AvatarImage alt={email.sender.name} />
                <AvatarFallback>
                  {email.sender.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex max-w-[70%] flex-col gap-1.5">
                <div
                  className={cn(
                    "flex items-center gap-2 text-xs text-muted-foreground",
                    isMe ? "flex-row-reverse" : "flex-row",
                  )}
                >
                  <span className="font-medium">{email.sender.name || senderEmail}</span>
                  <span>{format(new Date(email.receivedOn), "PPp")}</span>
                </div>
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5",
                    isMe
                      ? "rounded-tr-none bg-primary text-primary-foreground"
                      : "rounded-tl-none bg-muted",
                    "prose prose-sm dark:prose-invert max-w-none",
                  )}
                  dangerouslySetInnerHTML={{
                    __html: email.processedHtml || email.decodedBody || email.body,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
