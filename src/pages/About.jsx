import Header from "../components/Header";

function About() {
  return (
    <div className="p-6">
      <Header/>

      <h1 className="text-3xl font-bold text-purple-600">
        About Page
      </h1>
      <p className="mt-2 text-gray-600">
        Learn more about us.
      </p>
    </div>
  );
}

export default About;