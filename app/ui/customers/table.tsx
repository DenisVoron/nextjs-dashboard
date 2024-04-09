import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import Search from '@/app/ui/search';
import TableListCustomers from './customer-list';
import { CustomerTableSkeleton } from '../skeletons';

export default async function CustomersTable(query: { query: string }) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <Suspense fallback={<CustomerTableSkeleton />}>
              <TableListCustomers queryString={query} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
