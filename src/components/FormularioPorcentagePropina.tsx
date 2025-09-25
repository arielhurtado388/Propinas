import type { Dispatch, SetStateAction } from "react";

const opcionesPropina = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type FormularioPorcentagePropinaProps = {
  setPropina: Dispatch<SetStateAction<number>>;
  propina: number;
};

export default function FormularioPorcentagePropina({
  setPropina,
  propina,
}: FormularioPorcentagePropinaProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form className="mt-4">
        {opcionesPropina.map((opcion) => (
          <div key={opcion.id} className="flex gap-2">
            <label htmlFor={opcion.id}>{opcion.label}</label>
            <input
              id={opcion.id}
              type="radio"
              name="tip"
              value={opcion.value}
              onChange={(e) => setPropina(+e.target.value)}
              checked={opcion.value === propina}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
