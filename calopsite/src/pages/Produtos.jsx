import { useParams } from "react-router-dom";

export default function Produtos() {

  const { categoria, subcategoria } = useParams();

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold capitalize mb-8">

        {subcategoria
          ? `Produtos para ${subcategoria}`
          : `Categoria: ${categoria}`}

      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="border rounded-lg p-4">
          Produto 1
        </div>

        <div className="border rounded-lg p-4">
          Produto 2
        </div>

        <div className="border rounded-lg p-4">
          Produto 3
        </div>

      </div>

    </div>

  );
}