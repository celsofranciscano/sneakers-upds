import Link from "next/link";
function LinkButtonBorder({ href ,name}) {
  return (
    <Link href={href} className="border border-blue-500 rounded-md py-2 px-4 text-blue-500 hover:text-white active:text-white  hover:bg-blue-500 active:bg-blue-600  text-center">
      {name}
    </Link>
  );
}

export default LinkButtonBorder;
