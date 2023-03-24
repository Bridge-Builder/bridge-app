/*
  Warnings:

  - You are about to drop the `OfflineClass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OnlineClass` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OfflineClass";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OnlineClass";
PRAGMA foreign_keys=on;
