'use server';
import { Invoice } from './definitions';
import { z } from 'zod';

const formSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending' || 'paid']),
  date: z.string(),
});

const CreateInvoice = formSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };

  console.log(typeof rawFormData.amount);
  //   const rawFormData = Object.fromEntries<Invoice>(formData.entries());
  //   console.log(rawFormData);
}
