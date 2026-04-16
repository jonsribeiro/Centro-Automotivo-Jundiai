import Link from "next/link";

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 mt-12">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Serviços relacionados</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100"
          >
            <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
