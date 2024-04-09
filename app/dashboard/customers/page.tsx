import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customer page',
  description: 'Our application keeps statistics',
  keywords: ['statistics moneys', 'React', 'JavaScript'],
};

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <CustomersTable query={query} />
    </div>
  );
}
