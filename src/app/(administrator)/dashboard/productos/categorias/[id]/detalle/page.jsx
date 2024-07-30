import axios from "axios";
async function DetailCategoryPage({ params }) {
  let category;
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/dashboard/categories/${params.id}`
    );

    category = response.data;
  } catch (error) {}
  return (
    <section className=" grid gap-4 ">
      <h1 className="text-2xl font-medium dark:text-white text-black">
        Detalle categoria
      </h1>
      <div className="flex gap-4 rounded-md bg-white dark:bg-zinc-900 p-4   ">
      

        <div className="">
          <h1 className="font-medium text-2xl text-black dark:text-white">
            {category.name}
          </h1>
          <p>{category.urlCategory}</p>
          <p>{category.description}</p>
          {category.status && (
            <span className="bg-blue-500 text-white text-sm px-2 rounded-md">
              Activo
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailCategoryPage;
