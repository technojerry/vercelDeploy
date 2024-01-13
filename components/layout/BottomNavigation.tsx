import Link from "next/link";
export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 w-full bg-black text-white flex justify-around py-5">
      <Link href="/events">
        <span className="hover:bg-gray-600 px-4">Events</span>
      </Link>
      <Link href="/findwork">
        <span className="hover:bg-gray-600 px-4">Find Work</span>
      </Link>
      <Link href="/hire">
        <span className="hover:bg-gray-600 px-4">Hire</span>
      </Link>
      <Link href="/community">
        <span className="hover:bg-gray-600 px-4">Community</span>
      </Link>
      <Link href="/profile">
        <span className="hover:bg-gray-600 px-4">Profile</span>
      </Link>
    </div>
  );
}
