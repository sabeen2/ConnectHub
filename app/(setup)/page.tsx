import { initialProfile } from "@/lib/initial-profile";
import { db } from "../utils/db";
import { redirect } from "next/navigation";
import InitialModal from "@/components/modals/initial-modals";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }
  return (
    <div>
      <InitialModal />{" "}
    </div>
  );
};

export default SetupPage;
