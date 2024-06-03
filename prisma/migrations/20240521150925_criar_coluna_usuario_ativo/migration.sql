-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Usuario" ("email", "id", "nome", "senha") SELECT "email", "id", "nome", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check("Usuario");
PRAGMA foreign_keys=ON;
