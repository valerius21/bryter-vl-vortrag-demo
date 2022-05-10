import type { ActionFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

export const action: ActionFunction = () => redirect("/result/pruefung");

const Dossier = () => {
  return (
    <>
      <h1>Dossier</h1>
      <form method="post">
        <h2>Name</h2>
        <input type="text" className="input input-bordered w-full" />
        <h2>Taetigkeit</h2>
        <input type="text" className="input input-bordered w-full" />
        <h2>Transaktionsvolumen</h2>
        <input type="text" className="input input-bordered w-full" />
        <h2>Datum der Genehmigung</h2>
        <input type="text" className="input input-bordered w-full" />
        <button type="submit" className="btn-primary btn mt-5">
          Weiter
        </button>
      </form>
    </>
  );
};

export default Dossier;
