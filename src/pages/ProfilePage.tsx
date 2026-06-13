import ProfileHeader from '@/components/ProfileHeader';
import ContactList from '@/components/ContactList';
import OrgChart from '@/components/OrgChart';

export default function ProfilePage() {
  return (
    <div className="relative bg-white flex flex-col items-start w-full rounded-bl-[24px] rounded-br-[24px] overflow-hidden">
      <ProfileHeader />
      <ContactList />
      <OrgChart />
    </div>
  );
}
