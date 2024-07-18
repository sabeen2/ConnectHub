import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-indigo-500">
        This is protected routes
      </h1>
      <Button>Button</Button>
    </div>
  );
}
