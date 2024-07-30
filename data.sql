INSERT INTO tbroles ("PK_role", "role")
VALUES 
  (67483231, 'Cliente'),
  (71701748, 'Financiero'),
  (66516654, 'Gestor de pedidos'),
  (56455664, 'Gestor de Productos'),
  (65465435, 'Administrador');


INSERT INTO tbusers ("firstName", "lastName", "email", "password")
VALUES 
    ('John', 'Doe', 'john.doe@example.com', 'password123'),
    ('Jane', 'Smith', 'jane.smith@example.com', 'password123'),
    ('Michael', 'Johnson', 'michael.johnson@example.com', 'password123'),
    ('Emily', 'Davis', 'emily.davis@example.com', 'password123'),
    ('Daniel', 'Garcia', 'daniel.garcia@example.com', 'password123'),
    ('Laura', 'Martinez', 'laura.martinez@example.com', 'password123'),
    ('David', 'Rodriguez', 'david.rodriguez@example.com', 'password123'),
    ('Emma', 'Hernandez', 'emma.hernandez@example.com', 'password123'),
    ('James', 'Lopez', 'james.lopez@example.com', 'password123'),
    ('Sophia', 'Gonzalez', 'sophia.gonzalez@example.com', 'password123'),
    ('Liam', 'Wilson', 'liam.wilson@example.com', 'password123'),
    ('Olivia', 'Anderson', 'olivia.anderson@example.com', 'password123'),
    ('Mason', 'Thomas', 'mason.thomas@example.com', 'password123'),
    ('Ava', 'Taylor', 'ava.taylor@example.com', 'password123'),
    ('Elijah', 'Moore', 'elijah.moore@example.com', 'password123'),
    ('Isabella', 'Jackson', 'isabella.jackson@example.com', 'password123'),
    ('Lucas', 'Martin', 'lucas.martin@example.com', 'password123'),
    ('Mia', 'Lee', 'mia.lee@example.com', 'password123'),
    ('Benjamin', 'Perez', 'benjamin.perez@example.com', 'password123'),
    ('Amelia', 'White', 'amelia.white@example.com', 'password123'),
    ('Jacob', 'Harris', 'jacob.harris@example.com', 'password123'),
    ('Harper', 'Clark', 'harper.clark@example.com', 'password123'),
    ('Carter', 'Lewis', 'carter.lewis@example.com', 'password123'),
    ('Evelyn', 'Robinson', 'evelyn.robinson@example.com', 'password123'),
    ('William', 'Walker', 'william.walker@example.com', 'password123'),
    ('Avery', 'Young', 'avery.young@example.com', 'password123'),
    ('Jackson', 'Allen', 'jackson.allen@example.com', 'password123'),
    ('Ella', 'King', 'ella.king@example.com', 'password123'),
    ('Sebastian', 'Wright', 'sebastian.wright@example.com', 'password123'),
    ('Sofia', 'Scott', 'sofia.scott@example.com', 'password123'),
    ('Alexander', 'Torres', 'alexander.torres@example.com', 'password123'),
    ('Grace', 'Nguyen', 'grace.nguyen@example.com', 'password123'),
    ('Daniel', 'Hill', 'daniel.hill@example.com', 'password123'),
    ('Layla', 'Flores', 'layla.flores@example.com', 'password123'),
    ('Jackson', 'Green', 'jackson.green@example.com', 'password123'),
    ('Zoe', 'Adams', 'zoe.adams@example.com', 'password123'),
    ('Matthew', 'Nelson', 'matthew.nelson@example.com', 'password123'),
    ('Chloe', 'Baker', 'chloe.baker@example.com', 'password123'),
    ('Ethan', 'Hall', 'ethan.hall@example.com', 'password123'),
    ('Ella', 'Rivera', 'ella.rivera@example.com', 'password123'),
    ('Samuel', 'Campbell', 'samuel.campbell@example.com', 'password123'),
    ('Aubrey', 'Mitchell', 'aubrey.mitchell@example.com', 'password123'),
    ('James', 'Carter', 'james.carter@example.com', 'password123'),
    ('Addison', 'Roberts', 'addison.roberts@example.com', 'password123'),
    ('Aiden', 'Phillips', 'aiden.phillips@example.com', 'password123'),
    ('Scarlett', 'Evans', 'scarlett.evans@example.com', 'password123'),
    ('David', 'Turner', 'david.turner@example.com', 'password123'),
    ('Lillian', 'Parker', 'lillian.parker@example.com', 'password123'),
    ('Wyatt', 'Collins', 'wyatt.collins@example.com', 'password123'),
    ('Penelope', 'Edwards', 'penelope.edwards@example.com', 'password123');


INSERT INTO tbcategories ("name", "urlCategory", "description")
VALUES 
    ('Hombre', 'hombre', 'Zapatillas para hombres'),
    ('Mujer', 'mujer', 'Zapatillas para mujeres'),
    ('Niño', 'nino', 'Zapatillas para niños'),
    ('Running', 'running', 'Zapatillas especializadas en running'),
    ('Basketball', 'basketball', 'Zapatillas para jugar basketball'),
    ('Casual', 'casual', 'Zapatillas casuales para uso diario'),
    ('Entrenamiento', 'entrenamiento', 'Zapatillas para entrenamiento físico'),
    ('Skate', 'skate', 'Zapatillas ideales para skateboarding'),
    ('Fashion', 'fashion', 'Zapatillas de moda y tendencia'),
    ('Trail', 'trail', 'Zapatillas diseñadas para trail running');

INSERT INTO tbproducts ("FK_category", "name", "urlProduct", "regularPrice", "offerPrice", "stock", "description", "urlImage")
VALUES 
    (1, 'Nike Air Max 270', 'nike-air-max-270', 130, NULL, 50, 'Zapatillas Nike Air Max 270 para hombres', 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (1, 'Adidas Ultraboost 21', 'adidas-ultraboost-21', 160, NULL, 35, 'Zapatillas Adidas Ultraboost 21 para hombres', 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (1, 'New Balance Fresh Foam X', 'new-balance-fresh-foam-x', 120, 100, 20, 'Zapatillas New Balance Fresh Foam X para hombres', 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (2, 'Nike Air Zoom Pegasus 38', 'nike-air-zoom-pegasus-38', 120, NULL, 45, 'Zapatillas Nike Air Zoom Pegasus 38 para mujeres', 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (2, 'Adidas Ultraboost 21 W', 'adidas-ultraboost-21-w', 160, NULL, 30, 'Zapatillas Adidas Ultraboost 21 para mujeres', 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (2, 'Reebok Nano X', 'reebok-nano-x', 100, 80, 25, 'Zapatillas Reebok Nano X para mujeres', 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (3, 'Nike Revolution 5 GS', 'nike-revolution-5-gs', 60, NULL, 60, 'Zapatillas Nike Revolution 5 para niños', 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (3, 'Adidas Duramo SL K', 'adidas-duramo-sl-k', 50, NULL, 40, 'Zapatillas Adidas Duramo SL para niños', 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (3, 'Puma Vikky v2', 'puma-vikky-v2', 45, 35, 30, 'Zapatillas Puma Vikky v2 para niños', 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (4, 'Nike Air Zoom Structure 24', 'nike-air-zoom-structure-24', 140, NULL, 35, 'Zapatillas Nike Air Zoom Structure 24 para running', 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (4, 'Asics Gel-Kayano 28', 'asics-gel-kayano-28', 170, NULL, 25, 'Zapatillas Asics Gel-Kayano 28 para running', 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (4, 'Brooks Adrenaline GTS 23', 'brooks-adrenaline-gts-23', 130, 110, 30, 'Zapatillas Brooks Adrenaline GTS 23 para running', 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (5, 'Nike Zoom Freak 3', 'nike-zoom-freak-3', 120, NULL, 40, 'Zapatillas Nike Zoom Freak 3 para basketball', 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (5, 'Adidas Dame 7', 'adidas-dame-7', 130, NULL, 30, 'Zapatillas Adidas Dame 7 para basketball', 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (5, 'Under Armour Curry 8', 'under-armour-curry-8', 160, NULL, 20, 'Zapatillas Under Armour Curry 8 para basketball', 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (6, 'Converse Chuck Taylor All Star', 'converse-chuck-taylor-all-star', 60, NULL, 50, 'Zapatillas Converse Chuck Taylor All Star casuales', 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (6, 'Vans Old Skool', 'vans-old-skool', 70, NULL, 40, 'Zapatillas Vans Old Skool casuales', 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (6, 'Adidas Stan Smith', 'adidas-stan-smith', 80, NULL, 35, 'Zapatillas Adidas Stan Smith casuales', 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (7, 'Nike Metcon 7', 'nike-metcon-7', 130, NULL, 30, 'Zapatillas Nike Metcon 7 para entrenamiento', 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (7, 'Reebok Nano X1', 'reebok-nano-x1', 120, NULL, 25, 'Zapatillas Reebok Nano X1 para entrenamiento', 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (7, 'New Balance Minimus Prevail', 'new-balance-minimus-prevail', 110, NULL, 20, 'Zapatillas New Balance Minimus Prevail para entrenamiento', 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (8, 'Nike SB Zoom Stefan Janoski', 'nike-sb-zoom-stefan-janoski', 80, NULL, 40, 'Zapatillas Nike SB Zoom Stefan Janoski para skate', 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (8, 'Vans Sk8-Hi', 'vans-sk8-hi', 90, NULL, 35, 'Zapatillas Vans Sk8-Hi para skate', 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (8, 'Adidas Busenitz', 'adidas-busenitz', 100, NULL, 30, 'Zapatillas Adidas Busenitz para skate', 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg');


INSERT INTO tbsalesstatuses ("name", "description")
VALUES 
    ('Pendiente de pago', 'La venta está pendiente de recibir el pago del cliente'),
    ('Pagado', 'El cliente ha realizado el pago por la compra'),
    ('Enviado', 'Los productos han sido enviados al cliente'),
    ('Entregado', 'Los productos han sido entregados al cliente'),
    ('Cancelado', 'La venta ha sido cancelada por el cliente o el vendedor'),
    ('Reembolsado', 'El cliente ha sido reembolsado por la compra'),
    ('Problema', 'Hay un problema con la transacción o el envío'),
    ('Completado', 'La venta ha sido completada exitosamente');

    INSERT INTO tbpaymentmethods ("name", "description", "qrCodeImage")
VALUES 
    ('Banco BNB', 'Código QR para pago con Banco BNB', 'https://rifarotary.com/img/bnbqr.jpeg'),
    ('Banco BCP', 'Código QR para pago con BCP', 'https://bolsystem.com/wp-content/uploads/2023/02/bcp.jpeg');


INSERT INTO tbshipments ("city", "description", "price")
VALUES 
    ('La Paz', 'Envío por buses a La Paz', 20.00),
    ('Santa Cruz', 'Envío por buses a Santa Cruz', 30.00),
    ('Cochabamba', 'Envío por buses a Cochabamba', 0.00),
    ('Oruro', 'Envío por buses a Oruro', 15.00);


    INSERT INTO tbaddresses ("FK_user", "FK_shipment", "address", "phone", "indications")
VALUES 
    (1, 1, 'Calle 1, Zona Central, La Paz', '71234567', 'Casa de dos pisos, puerta azul'),
    (2, 2, 'Avenida Principal, Santa Cruz', '71345678', 'Edificio rojo, apartamento 5B'),
    (3, 3, 'Calle 3, Zona Norte, Cochabamba', '71456789', 'Casa con jardín, reja verde'),
    (4, 4, 'Calle 4, Zona Sur, Oruro', '71567890', 'Casa de esquina, puerta marrón'),
    (5, 1, 'Avenida 6, Zona Este, La Paz', '71678901', 'Departamento en el tercer piso'),
    (6, 2, 'Calle 7, Zona Oeste, Santa Cruz', '71789012', 'Casa de ladrillo, reja blanca'),
    (7, 3, 'Avenida 8, Zona Central, Cochabamba', '71890123', 'Casa grande, con garaje'),
    (8, 4, 'Calle 9, Zona Norte, Oruro', '71901234', 'Casa pequeña, sin jardín'),
    (9, 1, 'Avenida 10, Zona Sur, La Paz', '72012345', 'Edificio amarillo, apartamento 1A'),
    (10, 2, 'Calle 11, Zona Este, Santa Cruz', '72123456', 'Casa con terraza, puerta gris');


INSERT INTO tbsales ("FK_user", "FK_salestatus", "totalAmount")
VALUES 
    (1, 1, 150.00),
    (2, 2, 200.50),
    (3, 3, 300.75),
    (4, 4, 120.00),
    (5, 5, 220.00),
    (6, 6, 180.00),
    (7, 7, 260.00),
    (8, 8, 310.00),
    (9, 1, 400.00),
    (10, 2, 450.00),
    (11, 3, 500.00),
    (12, 4, 550.00),
    (13, 5, 600.00),
    (14, 6, 650.00),
    (15, 7, 700.00),
    (16, 8, 750.00),
    (17, 1, 800.00),
    (18, 2, 850.00),
    (19, 3, 900.00),
    (20, 4, 950.00);


INSERT INTO tbsaledetails ("FK_sale", "FK_product", "quantity", "unitPrice", "subtotal")
VALUES 
    (1, 1, 2, 75.00, 150.00),
    (2, 2, 1, 200.50, 200.50),
    (3, 3, 3, 100.25, 300.75),
    (4, 4, 1, 120.00, 120.00),
    (5, 5, 2, 110.00, 220.00),
    (6, 6, 1, 180.00, 180.00),
    (7, 7, 4, 65.00, 260.00),
    (8, 8, 2, 155.00, 310.00),
    (9, 9, 1, 400.00, 400.00),
    (10, 10, 3, 150.00, 450.00),
    (11, 11, 2, 250.00, 500.00),
    (12, 12, 1, 550.00, 550.00),
    (13, 13, 3, 200.00, 600.00),
    (14, 14, 2, 325.00, 650.00),
    (15, 15, 1, 700.00, 700.00),
    (16, 16, 3, 250.00, 750.00);


    INSERT INTO tbpaymentreceipts ("FK_paymentmethod", "FK_sale", "receiptImage", "receiptDate")
VALUES 
    (1, 1, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-01' ),
    (2, 2, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-02' ),
    (1, 3, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-03' ),
    (2, 4, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-04' ),
    (1, 5, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-05' ),
    (2, 6, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-06' ),
    (1, 7, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-07' ),
    (2, 8, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-08' ),
    (1, 9, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-09' ),
    (2, 10, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-10'),
    (1, 11, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-11'),
    (2, 12, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-12'),
    (1, 13, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-13'),
    (2, 14, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-14'),
    (1, 15, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-15'),
    (2, 16, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-16'),
    (1, 17, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-17'),
    (2, 18, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-18'),
    (1, 19, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-19'),
    (2, 20, 'https://static.docsity.com/media/avatar/documents/2023/09/08/796ec218996f10cf768926521a6d576a.jpeg', '2023-06-20');


INSERT INTO tbimages ("FK_product", "urlImage")
VALUES
    (1, 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (1, 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (1, 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (1, 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (2, 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (2, 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (3, 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (3, 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (3, 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (4, 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (4, 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (4, 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (5, 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (5, 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (6, 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (6, 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (7, 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (7, 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (8, 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (8, 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (9, 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (9, 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (9, 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (10, 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (10, 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (11, 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (11, 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (11, 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (12, 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (13, 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (13, 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (13, 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg'),
    (14, 'https://i.pinimg.com/564x/5b/96/88/5b96884eef291d937d0d8aa28babcdfa.jpg'),
    (14, 'https://i.pinimg.com/564x/37/f5/99/37f599aceea19026769a0747e0838f66.jpg'),
    (15, 'https://i.pinimg.com/564x/27/a5/80/27a580f0965bc92ef54efd0355b61335.jpg'),
    (15, 'https://i.pinimg.com/564x/b6/a6/37/b6a63704140dffe9218a21b12e1d7de0.jpg'),
    (16, 'https://i.pinimg.com/736x/94/f8/61/94f861c8bc292b84190a7459fc43a6c0.jpg'),
    (16, 'https://i.pinimg.com/564x/12/70/98/127098fe7552f972c2f88df8000982f6.jpg')
;
