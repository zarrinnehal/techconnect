import { ProfilePageView } from '@/components/profile-page';

export default function ProfilePage({ params }: { params: { username: string } }) {
  return <ProfilePageView username={params.username} />;
}
