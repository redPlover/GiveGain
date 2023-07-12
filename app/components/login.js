import Link from 'next/link';

export default function login() {
    return (
        <main className="max-w-md mx-auto mt-20">
        <div className="bg-white rounded-lg shadow-lg px-8 py-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Log in to your account</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username or Email
              </label>
              <input
                className="border border-gray-400 p-2 w-full rounded-lg"
                id="username"
                type="username"
                placeholder="example@email.org"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-400 p-2 w-full rounded-lg"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
              type="submit"
            >
              Log in
            </button>
          </form>
          <p className="mt-4 text-gray-500 text-sm">
            Don&apos;t have an account?&nbsp;
            <Link className="text-blue-500 hover:text-blue-700 font-bold" href="/help">
              Contact Us
            </Link>
          </p>
        </div>
      </main>
    );
};
