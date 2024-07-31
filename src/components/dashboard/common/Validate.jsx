"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Validate() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user?.role !== "Cliente") {
    router.back();
  }

  return <></>;
}

export default Validate;
