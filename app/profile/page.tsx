/* eslint-disable prettier/prettier */
import { ProfilePageServer } from "./profile-server";

function ProfilePageClient(){
    return <ProfilePageServer/>
}
export default function ProfilePage() {
  return <ProfilePageClient/>
}
