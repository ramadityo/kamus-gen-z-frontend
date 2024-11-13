import React from "react";
import Form from "next/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FormSearch() {
    return (
        <Form action="/search" className="flex space-x-2">
            <Input name="q" autoComplete="off" className="flex-1" placeholder="Cari kata gaul..." type="search" />
            <Button type="submit" className="bg-sapphire hover:bg-blue/90">
                Search
            </Button>
        </Form>
    );
}
