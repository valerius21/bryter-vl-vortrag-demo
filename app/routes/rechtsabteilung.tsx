import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const answer = data.get("rab");
  console.log({ answer });
  return answer != "no" ? redirect("/result/annahme") : redirect("/dossier");
};

const Rechtsabteilung = () => {
  return (
    <>
      <h1>Rechtsabteilung</h1>
      <p>Wurde die Transaktion bereits von der Rechtsabteilung bewilligt?</p>
      <form method="post">
        <label htmlFor="rja" className="label cursor-pointer">
          <span className="label-text">Ja</span>
          <input
            type="radio"
            name="rab"
            id="rja"
            value={"yes"}
            className="radio radio-primary"
          />
        </label>
        <label htmlFor="rnein" className="label cursor-pointer">
          <span className="label-text">Nein</span>
          <input
            type="radio"
            name="rab"
            id="rnein"
            value={"no"}
            className="radio radio-primary"
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Weiter
        </button>
      </form>
    </>
  );
};

export default Rechtsabteilung;
