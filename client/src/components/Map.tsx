import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
}

export function MapView({
  className,
  initialCenter = { lat: 51.9936, lng: 4.6714 },
  initialZoom = 15,
}: MapViewProps) {
  const mapSrc = `https://www.google.com/maps?q=${initialCenter.lat},${initialCenter.lng}&z=${initialZoom}&output=embed`;

  return (
    <iframe
      title="Van Weenen Dakdekkers locatie"
      src={mapSrc}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cn("w-full h-[500px] border-0", className)}
    />
  );
}
