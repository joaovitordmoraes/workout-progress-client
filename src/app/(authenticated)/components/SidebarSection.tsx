import { getProfileData } from '@/app/services/profile'
import { SidebarContent } from './SidebarContent'

export async function SidebarSection() {
  const profile = await getProfileData()

  return <SidebarContent name={profile.user.name} email={profile.user.email} />
}
