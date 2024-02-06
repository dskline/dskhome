import { Suspense } from "react";

import UserSelection from "@/app/features/users/UserSelection";

export default async function Home() {
  return (
    <div className="p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <UserSelection />
      </Suspense>
    </div>
  );
}
