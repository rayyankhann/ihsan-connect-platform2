export type EventType =
  | "Workshop"
  | "Guest Speaker"
  | "Service"
  | "Fundraising"
  | "Research"
  | "Career";

export interface EventDoc {
  id: string;
  title: string;
  start: string; // ISO string
  end: string; // ISO string
  location: string;
  type: EventType;
  description: string;
  coverImageURL?: string;
  rsvpURL?: string;
}

export function formatEventDateRange(startIso: string, endIso: string): string {
  try {
    const startDate = new Date(startIso);
    const endDate = new Date(endIso);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return "";

    const sameDay =
      startDate.getFullYear() === endDate.getFullYear() &&
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getDate() === endDate.getDate();

    const dateFormatter = new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const timeFormatter = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });

    if (sameDay) {
      return `${dateFormatter.format(startDate)} • ${timeFormatter.format(startDate)} – ${timeFormatter.format(endDate)}`;
    }

    return `${dateFormatter.format(startDate)} ${timeFormatter.format(startDate)} – ${dateFormatter.format(endDate)} ${timeFormatter.format(endDate)}`;
  } catch {
    return "";
  }
}


