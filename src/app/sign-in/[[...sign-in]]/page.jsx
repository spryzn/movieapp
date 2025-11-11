// import { SignIn } from "@clerk/nextjs";
// export default function SignInPage() {
//   return (
//     <div className="flex items-center justify-center p-3">
//       <SignIn />
//     </div>
//   );
// }


"use client";
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center p-3 relative">
      <div className="relative">
        <SignIn />

        <button
          onClick={() => router.push("/")}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-lg font-medium transition"
          aria-label="Cancel"
        >
          ✕
        </button>
      </div>
    </div>
  );
}



