import FounderProfiles from '../components/founderProfiles';

export default function About() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    About Us
                </h1>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                We are two high school students from Blacksburg High School that wished there was an easier way for students to engage in their community. When we thought of community service before, images of food pantries and donating blood were the first and sometimes only ideas that popped into our heads. Of course this isn’t the case, and we want to provide awareness of all volunteer activities around Blacksburg and the New River Valley to newcomers to service. In creating this site, we’ve had a lot of fun finding volunteer options for our own clubs and ourselves. We hope this is a valuable resource for everyone in the future.
                </p>
            </div>

            <FounderProfiles />

            <div className="py-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                    Our Mission
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                    Should we include this?
                </p>
            </div>
        </main>
    )
}
