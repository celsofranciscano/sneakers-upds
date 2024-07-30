import axios from "axios";
async function DetailClientPage({ params }) {
  let metodo;
  try {
    const response = await axios.get(
      `${process.env.URL_API}/api/dashboard/paymentmethods/${params.id}`
    );

    metodo = response.data;
    console.log(response)
  } catch (error) {}
  return (
    <section className=" grid gap-4 ">
      <h1 className="text-2xl font-medium dark:text-white text-black">
        Detalle del Metodos de pago
      </h1>

      <div className="">
        <h1 className="font-medium text-2xl text-black dark:text-white">
          {metodo.name}
        </h1>
        <img className="max-w-64" src={metodo.qrCodeImage} alt="" />
        <p>{metodo.description}</p>
        {metodo.status && (
          <span className="bg-blue-500 text-white text-sm px-2 rounded-md">
            Activo
          </span>
        )}
      </div>
    </section>
  );
}

export default DetailClientPage;
