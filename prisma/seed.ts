import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@hospital.local' },
    update: {},
    create: {
      email: 'admin@hospital.local',
      passwordHash: 'replace-with-argon2-hash',
      role: Role.SYSTEM_ADMIN
    }
  });
}

main().finally(async () => prisma.$disconnect());
