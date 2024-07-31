'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

// Registra los elementos necesarios para Chart.js
Chart.register(...registerables);

function SalesProductChart() {
    const [salesData, setSalesData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        // Función para obtener los datos de ventas y procesarlos
        const fetchSalesData = async () => {
            try {
                const response = await axios.get('/api/ecommerce/estadistica');
                const data = response.data;

                // Procesar los detalles de venta para obtener la cantidad vendida de cada producto
                const productSales = {};

                data.saleDetails.forEach(detail => {
                    const product = data.products.find(product => product.PK_product === detail.FK_product);
                    const productName = product ? product.name : 'Desconocido';

                    if (!productSales[productName]) {
                        productSales[productName] = 0;
                    }
                    productSales[productName] += detail.quantity;
                });

                // Convertir el objeto productSales a un array para facilitar el renderizado
                const formattedSalesData = Object.entries(productSales).map(([name, quantity]) => ({ name, quantity }));
                setSalesData(formattedSalesData);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSalesData();
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // Limpia el gráfico previo si existe
            if (ctx.chart) {
                ctx.chart.destroy();
            }

            const chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: salesData.map(sale => sale.name),
                    datasets: [{
                        label: 'Cantidad Vendida',
                        data: salesData.map(sale => sale.quantity),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Productos',
                            },
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Cantidad',
                            },
                        },
                    },
                },
            });

            // Guardar la instancia del gráfico en el contexto
            ctx.chart = chartInstance;
        }

        // Limpia la instancia del gráfico cuando el componente se desmonte
        return () => {
            if (chartRef.current && chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
        };
    }, [salesData]);

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-md p-8 shadow-md">
            <h1 className="text-xl font-semibold mb-4">Ventas de Productos</h1>
            <canvas ref={chartRef} className="w-full h-80"></canvas>
        </div>
    );
}

export default SalesProductChart;
