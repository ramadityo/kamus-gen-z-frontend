import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Form from "next/form";

export default function FormSearch({ placeholder, useButton, newClassname }) {
  return (
    <Form action="/search" className="flex space-x-2">
      <Input
        name="q"
        autoComplete="off"
        className={cn("flex-1", newClassname)}
        placeholder={placeholder}
        type="search"
      />
      {useButton && (
        <Button
          type="submit"
          className="bg-sapphire hover:bg-blue/90 rounded-full font-bold"
        >
          Search
        </Button>
      )}
    </Form>
  );
}
