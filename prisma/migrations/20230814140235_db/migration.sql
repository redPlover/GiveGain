-- CreateTable
CREATE TABLE "login" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "icon" BYTEA,
    "description" TEXT,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "lapse" INTEGER,
    "duration" INTEGER,
    "images" BYTEA[],
    "title" TEXT NOT NULL,
    "location" TEXT,
    "content" TEXT,
    "emails" TEXT[],
    "authorId" TEXT NOT NULL,
    "tags" TEXT[],
    "max" INTEGER,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "type" TEXT,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "login_username_key" ON "login"("username");

-- CreateIndex
CREATE UNIQUE INDEX "login_email_key" ON "login"("email");

-- CreateIndex
CREATE UNIQUE INDEX "login_name_key" ON "login"("name");

-- CreateIndex
CREATE UNIQUE INDEX "request_username_key" ON "request"("username");

-- CreateIndex
CREATE UNIQUE INDEX "request_email_key" ON "request"("email");

-- CreateIndex
CREATE UNIQUE INDEX "request_name_key" ON "request"("name");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "login"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
