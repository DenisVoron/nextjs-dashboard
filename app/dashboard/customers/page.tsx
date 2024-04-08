import { Suspense } from 'react';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customer page',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);
  // console.log(customers);

  return (
    <div className="w-full">
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
