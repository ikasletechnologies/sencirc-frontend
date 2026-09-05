import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding initial data...');

  // Seed Press Releases
  const pressReleases = [
    {
      id: 'dhl-saf-agreement',
      title: 'DHL Express signs Bahrain SAF offtake-agreement with SAF One',
      content: "First SAF offtake agreement for DHL Express in the Middle East, securing long term supply from SAF One's Bahrain plant.\n\nDHL Express, the world's leading international express logistics provider, today announced the signing of a landmark offtake agreement, bringing the first sustainable aviation fuel (SAF) production facility in the Middle East into DHL's global SAF supply network.",
      date: new Date('2026-05-12T00:00:00Z'),
    },
    {
      id: 'tata-projects-saf',
      title: "Tata Projects Selected as EPC Partner for SAF One's Sustainable Aviation Fuel Project",
      content: "Tata Projects has been selected as the Engineering, Procurement, and Construction (EPC) partner for SAF One's pioneering Sustainable Aviation Fuel project.\n\nThis marks a significant milestone in developing renewable fuels capacity in the region.",
      date: new Date('2026-01-20T00:00:00Z'),
    },
    {
      id: 'saffa-invests',
      title: "SAFFA Invests up to $30 Million in SAF One Project Starting Construction in 2026",
      content: "SAFFA announces a strategic investment of up to $30 million to accelerate the construction of SAF One's flagship sustainable aviation fuel facility.\n\nConstruction is set to begin in early 2026, delivering crucial clean energy infrastructure.",
      date: new Date('2026-01-15T00:00:00Z'),
    }
  ];

  for (const pr of pressReleases) {
    await prisma.pressRelease.upsert({
      where: { id: pr.id },
      update: {
        title: pr.title,
        content: pr.content,
        date: pr.date,
      },
      create: pr,
    });
  }

  // Seed Portfolio Items
  const portfolioItems = [
    {
      id: 'saf-one',
      title: 'SAF One',
      description: 'Producer of pathway-agnostic Sustainable Aviation Fuel (SAF), accelerating global aviation decarbonization.',
      image: '/homepage/portfolio1.png',
      link: '#',
    },
    {
      id: 'zeste-energy',
      title: 'ZESTE Energy',
      description: "ZESTE Energy is managing Europe and UK's largest waste-to-energy portfolio assets.",
      image: '/homepage/portfolio2.png',
      link: '#',
    }
  ];

  for (const item of portfolioItems) {
    await prisma.portfolioItem.upsert({
      where: { id: item.id },
      update: {
        title: item.title,
        description: item.description,
        image: item.image,
        link: item.link,
      },
      create: item,
    });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
