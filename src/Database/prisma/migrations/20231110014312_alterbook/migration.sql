/*
  Warnings:

  - Made the column `description` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "books" ALTER COLUMN "description" SET NOT NULL;
