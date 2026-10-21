import { DiscussionDetailView } from '@/components/discussion-detail';

export default function DiscussionDetailPage({ params }: { params: { id: string } }) {
  return <DiscussionDetailView discussionId={params.id} />;
}
