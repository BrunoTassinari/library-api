/*
  Warnings:

  - Added the required column `releaseDate` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL;
