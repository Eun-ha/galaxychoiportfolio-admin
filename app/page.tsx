import { auth } from "@/auth";
import { fetchLoggedInUser } from "@/backend/account-actions";
import DeleteAccount from "@/components/account/delete-account";
import LogoutForm from "@/components/account/logout-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

export default async function Home() {
  const session = await auth();
  const email = session?.user?.email || "";
  const user = await fetchLoggedInUser(email);

  console.log("session:", session);
  console.log("email:", email);
  console.log("User data:", user);

  return (
    <main>
      <div className="flex items-center justify-between w-full">
        <h1 className={`text-2xl`}>사용자 계정</h1>
      </div>
      <div className="p-4 rounded-md shadow bg-gray-50 md:p-6">
        <div className="flex items-center mb-6 space-x-4">
          <h1 className="text-xl font-semibold">Your Account</h1>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {/* Name */}
          <div className="space-y-1">
            <h2 className="text-sm font-medium text-gray-700">Name</h2>
            <input
              className="w-full px-3 py-2 text-lg font-semibold border border-gray-300 rounded-md"
              type="text"
              value={user.name}
              readOnly
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <h2 className="text-sm font-medium text-gray-700">Email</h2>
            <input
              className="w-full px-3 py-2 text-lg font-semibold border border-gray-300 rounded-md"
              type="email"
              value={user.email}
              readOnly
            />
          </div>

          {/* UUID*/}
          <div className="space-y-1">
            <h2 className="text-sm font-medium text-gray-700">UUID</h2>
            <p className="text-lg font-semibold">{user.id}</p>
          </div>

          {/* Auth Key */}
          <div className="space-y-1">
            <h2 className="text-sm font-medium text-gray-700">Auth Key</h2>
            <p className="text-lg font-semibold">{user.auth_key}</p>
          </div>
        </div>
      </div>
      <DeleteAccount deleteEmail={user.email} />
      <LogoutForm />
    </main>
  );
}
