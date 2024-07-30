import Detail from "@/components/common/Detail";
import Edit from "@/components/common/Edit";
import axios from "axios";

async function Table({ url, columns, rows, pathname,id }) {
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
        Ocurrió algún problema: {error.message}
      </div>
    );
  }

  return (
    <section className="overflow-x-auto shadow-md rounded-md bg-white dark:bg-zinc-900">
      <table className="w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
        <thead className="text-xs text-zinc-700 uppercase bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400">
          <tr>
            {columns.map((column, index) => (
              <th className="px-6 py-3" key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b dark:border-zinc-800">
              <td className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </td>
              {rows.map((rowField, rowIndex) => {
                if (rowField === "status") {
                  return (
                    <td key={rowIndex} className="px-6 py-4">
                      {row.status ? (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded">
                          Activo
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white px-2 py-1 rounded">
                          Inactivo
                        </span>
                      )}
                    </td>
                  );
                } else {
                  return (
                    <td key={rowIndex} className="px-6 py-4">
                      {row[rowField]}
                    </td>
                  );
                }
              })}
              <td className="flex gap-2 px-6 py-4">
                <Edit href={`${pathname}/${row[id]}/editar`} />
                <Detail href={`${pathname}/${row[id]}/detalle`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
