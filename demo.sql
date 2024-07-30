CREATE DATABASE dbecommerce;

-- Cambiar al contexto de la base de datos
\c dbecommerce;

-- Tabla de roles
CREATE TABLE tbroles (
    PK_role SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL UNIQUE,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL
);

-- Tabla de usuarios
CREATE TABLE tbusers (
    PK_user SERIAL PRIMARY KEY,
    FK_role INT NOT NULL DEFAULT 67483231,
    firstName VARCHAR(80) NOT NULL,
    lastName VARCHAR(80) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profileImage VARCHAR(255),
    status BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_role) REFERENCES tbroles(PK_role)
);


-- Tabla de ventas
CREATE TABLE tbsales (
    PK_sale SERIAL PRIMARY KEY,
    FK_user INT NOT NULL,
    totalAmount DECIMAL(10,2) NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_user) REFERENCES tbusers(PK_user),
);

-- Tabla de detalles de venta
CREATE TABLE tbsaledetails (
    PK_saledetail SERIAL PRIMARY KEY,
    FK_sale INT NOT NULL,
    quantity INT NOT NULL,
    unitPrice DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_sale) REFERENCES tbsales(PK_sale);
);

ALTER TABLE tbsaledetails
ADD COLUMN nameProduct VARCHAR(255),
ADD COLUMN description TEXT;  -- Changed data type to TEXT



-- Tabla de envíos
CREATE TABLE tbshipments (
    PK_shipment SERIAL PRIMARY KEY,
    city VARCHAR(80) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL
);

-- Tabla de direcciones
CREATE TABLE tbaddresses (
    PK_address SERIAL PRIMARY KEY,
    FK_user INT NOT NULL,
    FK_shipment INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    indications VARCHAR(255),
    status BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_user) REFERENCES tbusers(PK_user),
    FOREIGN KEY (FK_shipment) REFERENCES tbshipments(PK_shipment)
);

-- Tabla de categorías
CREATE TABLE tbcategories (
    PK_category SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE,
    urlCategory VARCHAR(20) NOT NULL UNIQUE,
    description VARCHAR(255),
    status BOOLEAN NOT NULL DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL
);

-- Tabla de productos
CREATE TABLE tbproducts (
    PK_product SERIAL PRIMARY KEY,
    FK_category INT NOT NULL,
    name VARCHAR(80) NOT NULL,
    urlProduct VARCHAR(80) NOT NULL UNIQUE,
    regularPrice DECIMAL(10,2) NOT NULL,
    offerPrice DECIMAL(10,2),
    stock INT NOT NULL,
    description VARCHAR(255),
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_category) REFERENCES tbcategories(PK_category)
);

-- Tabla de imágenes
CREATE TABLE tbimages (
    PK_image SERIAL PRIMARY KEY,
    FK_product INT NOT NULL,
    urlImage VARCHAR(255) NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_product) REFERENCES tbproducts(PK_product)
);

-- Tabla de estados de venta
CREATE TABLE tbsalesstatuses (
    PK_salestatus SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255),
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL
);

-- Tabla de ventas
CREATE TABLE tbsales (
    PK_sale SERIAL PRIMARY KEY,
    FK_user INT NOT NULL,
    FK_salestatus INT NOT NULL,
    totalAmount DECIMAL(10,2) NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_user) REFERENCES tbusers(PK_user),
    FOREIGN KEY (FK_salestatus) REFERENCES tbsalesstatuses(PK_salestatus)
);

-- Tabla de detalles de venta
CREATE TABLE tbsaledetails (
    PK_saledetail SERIAL PRIMARY KEY,
    FK_sale INT NOT NULL,
    FK_product INT NOT NULL,
    quantity INT NOT NULL,
    unitPrice DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_sale) REFERENCES tbsales(PK_sale),
    FOREIGN KEY (FK_product) REFERENCES tbproducts(PK_product)
);

-- Tabla de métodos de pago
CREATE TABLE tbpaymentmethods (
    PK_paymentmethod SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(255),
    qrCodeImage VARCHAR(255) NOT NULL,  
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL
);

-- Tabla de comprobantes de pago
CREATE TABLE tbpaymentreceipts (
    PK_paymentreceipt SERIAL PRIMARY KEY,
    FK_paymentmethod INT NOT NULL,
    FK_sale INT NOT NULL,
    receiptImage VARCHAR(255) NOT NULL, 
    receiptDate DATE NOT NULL,
    receiptTime TIME,
    status BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (FK_paymentmethod) REFERENCES tbpaymentmethods(PK_paymentmethod),
    FOREIGN KEY (FK_sale) REFERENCES tbsales(PK_sale)
);
