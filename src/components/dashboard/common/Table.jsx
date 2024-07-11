import axios from "axios";
import Link from "next/link";

async function Table({ url, columns, rows }) {
  let response;
  let data = [];

  try {
    response = await axios.get(`${process.env.URL_API}/api/dashboard/${url}`);
    data = response.data;

    if (data.length === 0) {
      return <div className="p-4 rounded-md">No se encontraron Usuarios</div>;
    }
  } catch (error) {
    return (
      <div className="p-4 rounded-md">
        Ocurrio algun problema pe{error.message}
      </div>
    );
  }

  return (
    <section className="p-4 bg-zinc-900 rounded-md">
      <table className="w-full ">
        <thead className=" border-b-2 border-zinc-500 ">
          <tr>
            {columns.map((column, index) => (
              <th className=" text-left" key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((user, index) => (
            <tr key={index} className="border-b border-zinc-700 p-16">
              <td>{index + 1}</td>
              {rows.map((rowField, rowIndex) => (
                <td key={rowIndex} className="">
                  {user[rowField]}
                </td>
              ))}
              <td className="flex  gap-2">
                <Link
                  href={`/editar/${user.ID}`}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </Link>
                <Link href={`/detalle/${user.ID}`}>Detalle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
