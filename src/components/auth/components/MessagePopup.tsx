import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { MessagePopupProps } from "@/types/auth"

export function MessagePopup({
  open,
  onClose,
  icon,
  title,
  message,
  primaryButton,
  secondaryButton,
  contentClassName = "",
  titleClassName = "",
  messageClassName = "",
  footerClassName = "",
}: MessagePopupProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "bg-white border-2 border-gray-200 shadow-2xl z-[100] max-w-lg rounded-2xl p-8 text-center space-y-6 [&>button]:-top-1.5 [&>button]:-right-[-10px]",
          contentClassName
        )}
      >
        <DialogHeader className="space-y-4 items-center">
          {icon && <div className="flex justify-center">{icon}</div>}
          <DialogTitle
            className={cn(
              "text-2xl font-bold text-center",
              titleClassName || "text-2xl font-semibold text-gray-800 pt-3 text-center w-full max-w-md mx-auto"
            )}
          >
            {title}
          </DialogTitle>
          {message && (
            <DialogDescription
              className={cn(
                "text-center text-gray-600",
                messageClassName || "text-base text-gray-500 text-center w-full max-w-md mx-auto"
              )}
            >
              {typeof message === "string" ? message : message}
            </DialogDescription>
          )}
        </DialogHeader>
        <DialogFooter
          className={cn(
            "flex gap-3 sm:justify-center",
            footerClassName || "flex flex-col justify-center gap-3 mt-6"
          )}
        >
          {primaryButton && (
            <Button
              onClick={primaryButton.onClick}
              className={cn("px-8 py-3 rounded-xl text-base w-full sm:w-auto min-w-[140px]", primaryButton.className)}
            >
              {primaryButton.label}
            </Button>
          )}
          {secondaryButton && (
            <Button
              onClick={secondaryButton.onClick}
              variant="outline"
              className={cn("px-8 py-3 rounded-xl text-base w-full sm:w-auto min-w-[140px]", secondaryButton.className)}
            >
              {secondaryButton.label}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
