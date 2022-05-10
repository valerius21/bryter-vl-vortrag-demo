import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const country = data.get("land");
  return country === "lnk"
    ? redirect("/result/ablehnung")
    : redirect("/transaktionsvolumen");
};

const Herkunftsland = () => {
  return (
    <>
      <h1>Herkunftsland</h1>
      <p>
        Aus welchem <strong>Land</strong> kommen Sie?
      </p>
      <form method="post" className="form-control">
        <label htmlFor="lfr" className="label cursor-pointer">
          <span className="label-text">Frankreich</span>
          <input
            type="radio"
            name="land"
            value={"lfr"}
            id="lfr"
            className="radio radio-primary radio-xl"
          />
        </label>
        <label htmlFor="lit" className="label cursor-pointer">
          <span className="label-text">Italien</span>
          <input
            type="radio"
            name="land"
            value={"lit"}
            id="lit"
            className="radio radio-primary radio-xl"
          />
        </label>
        <label htmlFor="lde" className="label cursor-pointer">
          <span className="label-text">Deutschland</span>
          <input
            type="radio"
            name="land"
            value={"lde"}
            id="lde"
            className="radio radio-primary radio-xl"
          />
        </label>
        <label htmlFor="lnk" className="label cursor-pointer">
          <span className="label-text">Nordkorea</span>
          <input
            type="radio"
            name="land"
            value={"lnk"}
            id="lnk"
            className="radio radio-primary radio-xl"
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Weiter
        </button>
      </form>
    </>
  );
};

export default Herkunftsland;
