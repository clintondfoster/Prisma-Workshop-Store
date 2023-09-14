-- CreateTable
CREATE TABLE "model product" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "cost" DECIMAL,

    CONSTRAINT "model product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model store" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "address" TEXT,

    CONSTRAINT "model store_pkey" PRIMARY KEY ("id")
);
