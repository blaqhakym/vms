"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function CheckoutButton({visitor}: Readonly<{visitor: {name: string}}>) {
  return (
    <Button
      type="button"
      className="rounded-md bg-rose-500 px-4 py-2 text-white hover:bg-rose-600"
      onClick={() =>
        toast.success(`Checked out ${visitor.name}`, {
          description: "Visitor has been checked out out of the estate.",
          action: {
            label: "Okay",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Check Out
    </Button>
  );
}

export default CheckoutButton;
