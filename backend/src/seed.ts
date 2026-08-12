import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL as string });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  // Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      employeeId: 'ADMIN1',
      name: 'System Admin',
      password: 'password123',
      role: 'ADMIN',
      department: 'System Administration',
    },
  });
  console.log('Admin created:', admin.email);

  // Create Teacher
  const teacher = await prisma.user.upsert({
    where: { email: 'teacher@example.com' },
    update: {},
    create: {
      email: 'teacher@example.com',
      employeeId: 'T001',
      name: 'Dr. Rahman',
      password: 'password123',
      role: 'TEACHER',
      department: 'Computer Science',
      designation: 'Professor',
    },
  });
  console.log('Teacher created:', teacher.email);

  // Create Student
  const student = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      email: 'student@example.com',
      studentId: '24201',
      name: 'Tahmid',
      password: 'password123',
      role: 'STUDENT',
      department: 'Computer Science',
      semester: 'Spring 2026',
    },
  });
  console.log('Student created:', student.email);

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
