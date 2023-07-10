import Image from 'next/image';

const founders = [
  {
    name: 'Aidan Stern',
    title: 'Co-Founder & CEO',
    image: '/images/aidan_profile.png',
    bio: 'Aidan is a seasoned entrepreneur with over 10 years of experience in the tech industry. He co-founded our company with a vision to create innovative solutions for our clients.',
  },
  {
    name: 'Honzik Schenk',
    title: 'Co-Founder & CTO',
    image: '/images/honzik_profile.png',
    bio: 'Honzik is a brilliant software engineer with a passion for creating elegant and efficient code. He co-founded our company with a mission to build sustainable and socially responsible products.',
  },
];

export default function FounderProfiles() {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        Our Founders
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {founders.map((founder) => (
          <div key={founder.name} className="bg-white dark:bg-gray-200 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex-shrink-0">
                <Image
                  width={100}
                  height={100}
                  src={founder.image}
                  alt={`Profile picture of ${founder.name}`}
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{founder.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{founder.title}</p>
              <p className="mt-3 text-base text-gray-500">{founder.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
