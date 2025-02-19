'use client';

import { createFileRoute } from '@tanstack/react-router';
import Icon from '../../../src/ui/icon-wrapper';
import { Input, Textarea, Select } from '../../../src/ui/input-wrapper';
import { useEventStore } from '../../utils/Store';
import { dummyEvent2 } from '../../lib/data';

function ProgressNav() {
  const { step, setStep } = useEventStore();
  return (
    <nav className="flex w-full -translate-y-12 items-center justify-center px-8 py-4">
      <div className="flex flex-wrap justify-center items-center md:gap-2 text-lg">
        {["Event Details", "Ticket Details", "Performers", "Confirmation", "Images"].map((label, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <Icon className={step > index ? '' : 'text-zinc-400'} icon="chevron_right" />}
            <button className={step > index ? '' : 'text-zinc-400'} onClick={() => setStep(index + 1)}>{label}</button>
          </div>
        ))}
      </div>
    </nav>
  );
}

function MetadataSection() {
  const { metadata, updateMetadata } = useEventStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateMetadata({ ...metadata, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-3 md:gap-4 flex-grow">
      <Input type="text" label="Event Name" name="title" value={metadata.title} onChange={handleInputChange} width="full" />
      <Input type="text" label="Location" name="venue" value={metadata.venue} onChange={handleInputChange} width="full" />
      <Select label="Event Type" name="category" value={metadata.category} options={dummyEvent2.categories} onChange={handleInputChange} width="full" />
      <Textarea name="description" label="Description" value={metadata.description} onChange={handleInputChange} width="full" height="medium" />
    </div>
  );
}

function Page() {
  const { step, setStep } = useEventStore();
  return (
    <div className="flex flex-col px-2 lg:px-0 items-center justify-center h-screen">
      <ProgressNav />
      <div className="bg-eventr-gray-900 border-2 border-eventr-gray-800 px-4 md:px-6 lg:px-10 flex flex-col gap-2 py-4 lg:py-6 -translate-y-12 w-full lg:w-[880px] h-[640px] md:h-[560px] rounded-md">
        {step === 1 && <MetadataSection />}
        <div className="w-full flex justify-end gap-4">
          <button onClick={() => setStep(step - 1)} className="w-24 py-1 flex items-center justify-center text-lg border bg-eventr-gray/25 border-zinc-600">
            <Icon icon="arrow_back" />Back
          </button>
          <button onClick={() => setStep(step + 1)} className="w-24 py-1 flex items-center justify-center text-lg font-bold bg-eventr-main rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute('/host/create')({ component: Page });
