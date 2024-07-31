'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

// Registra los elementos necesarios para Chart.js
Chart.register(...registerables);

function SaleChart() {
    const [salesData, setSalesData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        // Función para obtener los datos de ventas y procesarlos
        const fetchSalesData = async () => {
            try {
                const response = await axios.get('/api/dashboard/sales');
                const sales = response.data;

                // Inicializar las ventas por mes
                const salesByMonth = Array(12).fill(0);

                // Procesar las ventas para sumar las cantidades por mes
                sales.forEach(sale => {
                    const date = new Date(sale.createdAt);
                    const month = date.getMonth(); // Enero es 0, Diciembre es 11
                    salesByMonth[month] += parseFloat(sale.totalAmount);
                });

                setSalesData(salesByMonth);
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
                type: 'line',
                data: {
                    labels: [
                        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                    ],
                    datasets: [{
                        label: 'Ventas Mensuales',
                        data: salesData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 2,
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    return `Monto Total: Bs${context.raw.toFixed(2)}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Meses',
                            },
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Monto Total',
                            },
                            ticks: {
                                callback: (value) => `Bs ${value}`,
                            }
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
            <h1 className="text-xl font-semibold mb-4">Ventas Mensuales</h1>
            <canvas ref={chartRef} className="w-full h-80"></canvas>
        </div>
    );
}

export default SaleChart;
