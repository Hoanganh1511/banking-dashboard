import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Tailwind CSS v3 Works! 🎉
          </h1>
          <p className="text-gray-600 mb-4">
            If you see this styled, Tailwind is working correctly.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Test Button
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
