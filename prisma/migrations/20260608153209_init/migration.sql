-- CreateTable
CREATE TABLE "SiteRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "businessName" TEXT,
    "onlineAddress" TEXT,
    "websiteType" TEXT NOT NULL,
    "productCountRange" TEXT NOT NULL,
    "budgetRange" TEXT NOT NULL,
    "deliveryTime" TEXT NOT NULL,
    "needsPaymentGateway" BOOLEAN NOT NULL DEFAULT false,
    "needsAdminPanel" BOOLEAN NOT NULL DEFAULT false,
    "needsWhatsApp" BOOLEAN NOT NULL DEFAULT false,
    "needsContent" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "adminNote" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
