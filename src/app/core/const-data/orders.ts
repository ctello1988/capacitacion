export const orders = [
    {
        "id": 1,
        "fecha_pedido": "2024-02-28",
        "hora_pedido": "12:00",
        "id_cliente": 1,
        "mesa": 2,
        "estado_pedido": "En espera",
        "lista_platos": [
            {
                "id_menu": 1,
                "cantidad": 1
            }
        ],
        "total_pedido": 10,
        "metodo_pago": "Efectivo"
    },
    {
        "id": 2,
        "fecha_pedido": "2024-03-08",
        "hora_pedido": "19:00",
        "id_cliente": 2,
        "mesa": 4,
        "estado_pedido": "En espera",
        "lista_platos": [
            {
                "id_menu": 3,
                "cantidad": 1
            },
            {
                "id_menu": 4,
                "cantidad": 2
            }
        ],
        "total_pedido": 25,
        "metodo_pago": "Tarjeta"
    },
    {
        "id": 3,
        "fecha_pedido": "2024-03-08",
        "hora_pedido": "12:30",
        "id_cliente": 3,
        "mesa": null,
        "estado_pedido": "En preparación",
        "lista_platos": [
            {
                "id_menu": 5,
                "cantidad": 1
            },
            {
                "id_menu": 6,
                "cantidad": 1
            }
        ],
        "total_pedido": 20,
        "metodo_pago": "Efectivo"
    },
    {
        "id": 4,
        "fecha_pedido": "2024-03-08",
        "hora_pedido": "13:00",
        "id_cliente": 4,
        "mesa": 5,
        "estado_pedido": "En espera",
        "lista_platos": [
            {
                "id_menu": 7,
                "cantidad": 2
            },
            {
                "id_menu": 8,
                "cantidad": 1
            }
        ],
        "total_pedido": 30,
        "metodo_pago": "Tarjeta"
    }
];

