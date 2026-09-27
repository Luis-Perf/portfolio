export const whatsappUrl = (phone: string, message: string): string =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

/** 0 = morning (05–11h), 1 = afternoon (12–17h), 2 = evening/night. */
export function greetingIndex(hour: number): 0 | 1 | 2 {
  if (hour >= 5 && hour < 12) return 0;
  if (hour >= 12 && hour < 18) return 1;
  return 2;
}
