import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const [category, setCategory] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      email,
    });

    setName("");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded-xl border p-6"
    >
      <h2 className="text-2xl font-bold">Contact Us</h2>

      <div>
        <label htmlFor="name" className="mb-1 block">
          Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-lg border p-2"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block">
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border p-2"
          required
        />
      </div>

<select
  value={category}
  onChange={(event) => setCategory(event.target.value)}
  className="w-full rounded-lg border p-2"
>
  <option value="">Choose a category</option>
  <option value="electronics">Email</option>
  <option value="clothing">phone</option>
</select>
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;