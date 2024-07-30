-- CreateTable
CREATE TABLE "tbroles" (
    "PK_role" SERIAL NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbroles_pkey" PRIMARY KEY ("PK_role")
);

-- CreateTable
CREATE TABLE "tbusers" (
    "PK_user" SERIAL NOT NULL,
    "FK_role" INTEGER NOT NULL DEFAULT 67483231,
    "firstName" VARCHAR(80) NOT NULL,
    "lastName" VARCHAR(80) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "profileImage" VARCHAR(255),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbusers_pkey" PRIMARY KEY ("PK_user")
);

-- CreateTable
CREATE TABLE "tbshipments" (
    "PK_shipment" SERIAL NOT NULL,
    "city" VARCHAR(80) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbshipments_pkey" PRIMARY KEY ("PK_shipment")
);

-- CreateTable
CREATE TABLE "tbaddresses" (
    "PK_address" SERIAL NOT NULL,
    "FK_user" INTEGER NOT NULL,
    "FK_shipment" INTEGER NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "indications" VARCHAR(255),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbaddresses_pkey" PRIMARY KEY ("PK_address")
);

-- CreateTable
CREATE TABLE "tbcategories" (
    "PK_category" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "urlCategory" VARCHAR(20) NOT NULL,
    "description" VARCHAR(255),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbcategories_pkey" PRIMARY KEY ("PK_category")
);

-- CreateTable
CREATE TABLE "tbproducts" (
    "PK_product" SERIAL NOT NULL,
    "FK_category" INTEGER NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "urlProduct" VARCHAR(80) NOT NULL,
    "regularPrice" DECIMAL(10,2) NOT NULL,
    "offerPrice" DECIMAL(10,2),
    "stock" INTEGER NOT NULL,
    "description" VARCHAR(255),
    "urlImage" VARCHAR(255),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),

    CONSTRAINT "tbproducts_pkey" PRIMARY KEY ("PK_product")
);

-- CreateTable
CREATE TABLE "tbimages" (
    "PK_image" SERIAL NOT NULL,
    "FK_product" INTEGER NOT NULL,
    "urlImage" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3),

    CONSTRAINT "tbimages_pkey" PRIMARY KEY ("PK_image")
);

-- CreateTable
CREATE TABLE "tbsalesstatuses" (
    "PK_salestatus" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbsalesstatuses_pkey" PRIMARY KEY ("PK_salestatus")
);

-- CreateTable
CREATE TABLE "tbsales" (
    "PK_sale" SERIAL NOT NULL,
    "FK_user" INTEGER NOT NULL,
    "FK_salestatus" INTEGER NOT NULL,
    "totalAmount" DECIMAL(10,2) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbsales_pkey" PRIMARY KEY ("PK_sale")
);

-- CreateTable
CREATE TABLE "tbsaledetails" (
    "PK_saledetail" SERIAL NOT NULL,
    "FK_sale" INTEGER NOT NULL,
    "FK_product" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(10,2) NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbsaledetails_pkey" PRIMARY KEY ("PK_saledetail")
);

-- CreateTable
CREATE TABLE "tbpaymentmethods" (
    "PK_paymentmethod" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255),
    "qrCodeImage" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbpaymentmethods_pkey" PRIMARY KEY ("PK_paymentmethod")
);

-- CreateTable
CREATE TABLE "tbpaymentreceipts" (
    "PK_paymentreceipt" SERIAL NOT NULL,
    "FK_paymentmethod" INTEGER NOT NULL,
    "FK_sale" INTEGER NOT NULL,
    "receiptImage" VARCHAR(255) NOT NULL,
    "receiptDate" TIMESTAMP(3) NOT NULL,
    "receiptTime" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tbpaymentreceipts_pkey" PRIMARY KEY ("PK_paymentreceipt")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbroles_role_key" ON "tbroles"("role");

-- CreateIndex
CREATE UNIQUE INDEX "tbusers_email_key" ON "tbusers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tbcategories_name_key" ON "tbcategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tbcategories_urlCategory_key" ON "tbcategories"("urlCategory");

-- CreateIndex
CREATE UNIQUE INDEX "tbproducts_urlProduct_key" ON "tbproducts"("urlProduct");

-- CreateIndex
CREATE UNIQUE INDEX "tbsalesstatuses_name_key" ON "tbsalesstatuses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tbpaymentmethods_name_key" ON "tbpaymentmethods"("name");

-- AddForeignKey
ALTER TABLE "tbusers" ADD CONSTRAINT "tbusers_FK_role_fkey" FOREIGN KEY ("FK_role") REFERENCES "tbroles"("PK_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbaddresses" ADD CONSTRAINT "tbaddresses_FK_user_fkey" FOREIGN KEY ("FK_user") REFERENCES "tbusers"("PK_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbaddresses" ADD CONSTRAINT "tbaddresses_FK_shipment_fkey" FOREIGN KEY ("FK_shipment") REFERENCES "tbshipments"("PK_shipment") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbproducts" ADD CONSTRAINT "tbproducts_FK_category_fkey" FOREIGN KEY ("FK_category") REFERENCES "tbcategories"("PK_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbimages" ADD CONSTRAINT "tbimages_FK_product_fkey" FOREIGN KEY ("FK_product") REFERENCES "tbproducts"("PK_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbsales" ADD CONSTRAINT "tbsales_FK_user_fkey" FOREIGN KEY ("FK_user") REFERENCES "tbusers"("PK_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbsales" ADD CONSTRAINT "tbsales_FK_salestatus_fkey" FOREIGN KEY ("FK_salestatus") REFERENCES "tbsalesstatuses"("PK_salestatus") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbsaledetails" ADD CONSTRAINT "tbsaledetails_FK_sale_fkey" FOREIGN KEY ("FK_sale") REFERENCES "tbsales"("PK_sale") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbsaledetails" ADD CONSTRAINT "tbsaledetails_FK_product_fkey" FOREIGN KEY ("FK_product") REFERENCES "tbproducts"("PK_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpaymentreceipts" ADD CONSTRAINT "tbpaymentreceipts_FK_paymentmethod_fkey" FOREIGN KEY ("FK_paymentmethod") REFERENCES "tbpaymentmethods"("PK_paymentmethod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbpaymentreceipts" ADD CONSTRAINT "tbpaymentreceipts_FK_sale_fkey" FOREIGN KEY ("FK_sale") REFERENCES "tbsales"("PK_sale") ON DELETE RESTRICT ON UPDATE CASCADE;
