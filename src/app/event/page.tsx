'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getEventById } from '@/lib/events-data';
import type { EventDoc } from '@/types/events';
import { formatEventDateRange } from '@/types/events';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
// RSVP now redirects to Google Form; in-app form removed

export default function EventDetailStaticPage() {
  const params = useSearchParams();
  const id = params?.get('id') || '';
  const [event, setEvent] = useState<EventDoc | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [submitted] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    if (!id) {
      setLoading(false);
      setError('Event not found.');
      return;
    }
    setLoading(true);
    setError(null);
    getEventById(id)
      .then((doc) => {
        if (isMounted) setEvent(doc);
      })
      .catch(() => {
        if (isMounted) setError('Failed to load event');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => { isMounted = false };
  }, [id]);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/events" className="text-blue-700 hover:underline">← Back to Events</Link>
        </div>
        {loading && (
          <div className="text-gray-600">Loading…</div>
        )}
        {!loading && error && (
          <div className="text-red-600">{error}</div>
        )}
        {!loading && !error && !event && (
          <div className="text-gray-600">Event not found.</div>
        )}
        {!loading && !error && event && (
          <Card className="p-6">
            {event.coverImageURL && (
              <div className="w-full h-64 relative mb-4">
                <Image src={event.coverImageURL} alt={event.title} fill className="object-cover rounded-md" />
              </div>
            )}
            <div className="flex items-center gap-3 mb-2">
              <Badge>{event.type}</Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
            <div className="text-gray-700 mb-4">{formatEventDateRange(event.start, event.end)}</div>
            <div className="text-gray-800 mb-6 whitespace-pre-line">{event.description}</div>
            <div className="flex items-center gap-3">
              <div className="text-gray-600">Location: {event.location}</div>
            </div>

            <div className="mt-6">
              {event.rsvpURL ? (
                <a href={event.rsvpURL} target="_blank" rel="noopener noreferrer">
                  <Button>RSVP on Google Form</Button>
                </a>
              ) : (
                <div>
                  <Button disabled>RSVP Coming Soon</Button>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}


