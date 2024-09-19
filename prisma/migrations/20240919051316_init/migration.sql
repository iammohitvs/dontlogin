-- CreateTable
CREATE TABLE "Uploads" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileLink" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Uploads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Uploads_id_key" ON "Uploads"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Uploads_fileName_key" ON "Uploads"("fileName");

-- CreateIndex
CREATE UNIQUE INDEX "Uploads_fileLink_key" ON "Uploads"("fileLink");
