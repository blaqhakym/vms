"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FormButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{children}</Button>
        </DialogTrigger>
      <form className="space-y-4 w-full bg-amber-300">

        <DialogContent className=" dialog-content w-screen  overflow-auto">
          <DialogHeader>
            <DialogTitle>New Visitor</DialogTitle>
            <DialogDescription className="text-sm text-slate-500">
              Please fill in the visitor details below.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="flex flex-col gap-3">
            <Field>
              <FieldLabel htmlFor="visitor-name">Visitor Name</FieldLabel>
              <Input
                id="visitor-name"
                name="name"
                type="text"
                placeholder="e.g. John Doe"
                className="w-full"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="phone-number">Phone Number</FieldLabel>
              <Input
                id="phone-number"
                name="phone"
                type="tel"
                placeholder="e.g. +123456789"
                className="w-full"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="visiting-address">
                Visiting Address
              </FieldLabel>
              <Input
                id="visiting-address"
                name="address"
                type="text"
                placeholder="e.g. 17, Udi Street"
                className="w-full"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="visitor-purpose">
                Purpose of Visit
              </FieldLabel>
              <Select>
                <SelectTrigger id="visitor-purpose" className="w-full">
                  <SelectValue placeholder="Select purpose of visit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Delivery">Delivery</SelectItem>
                    <SelectItem value="Guest">Guest</SelectItem>
                    <SelectItem value="Work">Work</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="vehicle-plate">
                Vehicle Plate (optional)
              </FieldLabel>
              <Input
                id="vehicle-plate"
                name="plate"
                type="text"
                placeholder="e.g. ABC-123"
                className="w-full"
              />
            </Field>
          </FieldGroup>

          <DialogClose>
            <Button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Check In Visitor
            </Button>
          </DialogClose>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default FormButton;
