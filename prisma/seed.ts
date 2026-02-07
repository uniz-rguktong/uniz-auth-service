import { PrismaClient } from '../src/generated/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding Auth Service...');

  // 1. Clean old data
  try {
    await prisma.authCredential.deleteMany();
    await prisma.otpLog.deleteMany();
    console.log('Deleted old auth data.');
  } catch (e) {
    console.warn("Could not clean old data, proceeding...");
  }

  // 2. See Admin Credential
  const adminHash = await bcrypt.hash('security@uniz', 10);
  await prisma.authCredential.create({
    data: {
      username: 'security',
      passwordHash: adminHash,
      role: 'security'
    }
  });

  const extraAdmins = [
    'dean', 'warden_male', 'warden_female', 'caretaker_male', 
    'caretaker_female', 'webmaster', 'director', 'swo', 'librarian'
  ];

  for (const admin of extraAdmins) {
      // For simplicity, password is same as username + '@uniz' 
      // e.g. dean -> dean@uniz
      const hash = await bcrypt.hash(`${admin}@uniz`, 10);
      
      // Use upsert-like logic (create only if not exists, since there's no upsert here without where unique id often)
      // Actually Prisma create throws if unique constraint fails. 
      // Let's rely on deleteMany() at start.
      await prisma.authCredential.create({
          data: {
              username: admin,
              passwordHash: hash,
              role: admin // Use the exact username as the role for these specific admins
          }
      });
  }

  // 3. Seed Students
  const defaultPass = await bcrypt.hash('123456', 10);
  const students = ['O210008', 'O210329', 'O210139', 'O210829'];

  for (const s of students) {
    await prisma.authCredential.create({
      data: {
        username: s,
        passwordHash: defaultPass,
        role: 'student'
      }
    });
  }

  console.log('Seeded Auth data');
  console.log(' - Admin: security / security@uniz');
  console.log(' - Students: O21... / 123456');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
