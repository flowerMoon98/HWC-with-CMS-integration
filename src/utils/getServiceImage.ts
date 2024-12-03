export function getServiceImage(service: string): string {
  // This is temporary - replace with actual images later
  return `https://source.unsplash.com/800x600/?${service.toLowerCase().replace(' ', '-')}`
} 