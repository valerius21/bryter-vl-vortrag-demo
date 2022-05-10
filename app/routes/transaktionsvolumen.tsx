import type { ActionFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const volumen = data.get("transaction");

  if (!volumen) return { status: 400 };

  return +volumen < 10_000
    ? redirect("/result/annahme")
    : redirect("/rechtsabteilung");
};
export const Transaktionsvolumen = () => {
  return (
    <>
      <h1>Transaktionsvolumen</h1>
      <p>Wie hoch ist das Transaktionsvolumen?</p>
      <form method="post" className="form-control">
        <label htmlFor="transaction" className="label">
          <span className="label-text">Transaktionsvolumen in EUR</span>
          <input
            type="text"
            name="transaction"
            id="transaction"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Weiter
        </button>
      </form>
    </>
  );
};

export default Transaktionsvolumen;
