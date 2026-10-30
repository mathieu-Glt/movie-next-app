async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      
      <main className="flex min-h-screen items-center justify-center bg-blue-900 px-4">
        <form className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Contact
          </h1>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="vous@exemple.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
      </main>
    </div>
  );
}

export default page;
