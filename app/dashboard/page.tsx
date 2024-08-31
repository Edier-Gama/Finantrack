/* eslint-disable prettier/prettier */
import { DashboardServer } from "./dashboard-server"

function DashboardPageClient(){
  return <DashboardServer/>
}
export default function DashboardPage() {
  return <DashboardPageClient/>
}

