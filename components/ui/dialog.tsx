"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils/utils"

const dialogBackdropClassName =
  "fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm transition-opacity data-[starting-style]:opacity-0 data-[ending-style]:opacity-0"

const dialogContentClassName =
  "fixed left-1/2 top-1/2 z-50 flex h-[min(44vh,26rem)] w-[min(48rem,calc(100vw-10rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-2xl outline-none data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0"

function Dialog(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>
) {
  return <DialogPrimitive.Root {...props} />
}

function DialogTrigger(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger {...props} />
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop className={dialogBackdropClassName} />
      <DialogPrimitive.Popup
        className={cn(dialogContentClassName, className)}
        {...props}
      >
        {children}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  )
}

function DialogClose(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
) {
  return <DialogPrimitive.Close {...props} />
}

function DialogTitle(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
) {
  return <DialogPrimitive.Title {...props} />
}

function DialogDescription(
  props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
) {
  return <DialogPrimitive.Description {...props} />
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
}
