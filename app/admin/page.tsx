import { auth } from "@/auth";
import { fetchLoggedInUser } from "@/backend/account-actions";
import DeleteAccount from "@/components/account/delete-account";
import LogoutForm from "@/components/account/logout-form";
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <main className="flex flex-col gap-8 py-8 px-2 md:px-0">
      <Card className="w-full max-w-2xl mx-auto bg-card text-card-foreground border border-border shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">사용자 계정</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {/* Name */}
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-darkOnly-subtext">Name</h2>
              <input
                className="w-full px-3 py-2 text-lg font-semibold rounded-md bg-darkOnly-bg text-darkOnly-text border border-darkOnly-border focus:outline-none focus:ring-2 focus:ring-point-red"
                type="text"
                value={user.name}
                readOnly
              />
            </div>
            {/* Email */}
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-darkOnly-subtext">Email</h2>
              <input
                className="w-full px-3 py-2 text-lg font-semibold rounded-md bg-darkOnly-bg text-darkOnly-text border border-darkOnly-border focus:outline-none focus:ring-2 focus:ring-point-red"
                type="email"
                value={user.email}
                readOnly
              />
            </div>
            {/* UUID */}
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-darkOnly-subtext">UUID</h2>
              <p className="text-lg font-semibold text-darkOnly-text break-all">{user.id}</p>
            </div>
            {/* Auth Key */}
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-darkOnly-subtext">Auth Key</h2>
              <p className="text-lg font-semibold text-darkOnly-text break-all">{user.auth_key}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="w-full max-w-2xl mx-auto flex flex-row gap-4 justify-between items-center">
        <DeleteAccount deleteEmail={user.email} />
        <LogoutForm />
      </div>
    </main>
  );
}
