/*
  Warnings:

  - You are about to drop the column `published` on the `authors` table. All the data in the column will be lost.
  - Added the required column `booksPublished` to the `authors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "authors" DROP COLUMN "published",
ADD COLUMN     "booksPublished" INTEGER NOT NULL;
