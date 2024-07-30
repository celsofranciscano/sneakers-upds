"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ButtonSubmit from "@/components/common/ButtonSubmit";

function NewSaleDetailPage({ params }) {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/dashboard/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const selectedProduct = watch("FK_product");
  const quantity = watch("quantity", 1);

  useEffect(() => {
    if (selectedProduct && products.length) {
      const product = products.find(
        (p) => p.PK_product === parseInt(selectedProduct)
      );
      if (product) {
        const unitPrice = parseFloat(product.regularPrice) || 0;
        setValue("unitPrice", unitPrice);
        setValue("quantity", 1);
        setValue("subtotal", unitPrice);
      }
    }
  }, [selectedProduct, products, setValue]);

  useEffect(() => {
    if (selectedProduct && products.length) {
      const product = products.find(
        (p) => p.PK_product === parseInt(selectedProduct)
      );
      if (product) {
        const unitPrice = parseFloat(product.regularPrice) || 0;
        setValue("subtotal", unitPrice * (parseInt(quantity) || 0));
      }
    }
  }, [quantity, selectedProduct, products, setValue]);

  const validateQuantity = (value) => {
    const product = products.find(
      (p) => p.PK_product === parseInt(selectedProduct)
    );
    return product
      ? value <= product.stock ||
          `La cantidad no debe exceder el stock disponible (${product.stock})`
      : true;
  };

  const onSubmit = async (data) => {
    const response = await axios.post(
      `/api/dashboard/sales/${params.id}/saledetails`,
      data
    );

    if (response.status === 200) {
      router.refresh();
      router.back();
    }
  };

  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-md">
      <h1 className="text-2xl font-medium text-white">Agregar nuevo</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-4"
      >
        <label className="flex flex-col gap-1">
          Producto
          <select
            className="input-dark"
            {...register("FK_product", {
              required: "Debes seleccionar un producto",
            })}
          >
            <option value="">Seleccionar</option>
            {products.map((product) => (
              <option key={product.PK_product} value={product.PK_product}>
                {product.name}
              </option>
            ))}
          </select>
          {errors.FK_product && (
            <span className="text-sm text-red-500">
              {errors.FK_product.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Cantidad
          <input
            className="input-dark"
            type="number"
            {...register("quantity", {
              required: "Cantidad es obligatoria",
              validate: validateQuantity,
            })}
          />
          {errors.quantity && (
            <span className="text-sm text-red-500">
              {errors.quantity.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Precio unitario
          <input
            className="input-dark"
            type="number"
            {...register("unitPrice", {
              required: "Precio unitario es obligatorio",
            })}
            readOnly
          />
          {errors.unitPrice && (
            <span className="text-sm text-red-500">
              {errors.unitPrice.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          Subtotal
          <input
            className="input-dark"
            type="number"
            {...register("subtotal", {
              required: "Subtotal es obligatorio",
            })}
            readOnly
          />
          {errors.subtotal && (
            <span className="text-sm text-red-500">
              {errors.subtotal.message}
            </span>
          )}
        </label>

        <ButtonSubmit name={"Añadir nuevo"} />
      </form>
    </section>
  );
}

export default NewSaleDetailPage;
