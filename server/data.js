const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  // Sample ProductTrend data (views and purchases for a few products over a 10-day span)
  const productTrends = [
    { productId: 'prod-3', date: new Date('2025-09-02'), views: 200, purchases: 12 },
    { productId: 'prod-3', date: new Date('2025-09-04'), views: 150, purchases: 8 },
    { productId: 'prod-3', date: new Date('2025-09-08'), views: 95, purchases: 4 },
    { productId: 'prod-4', date: new Date('2025-09-03'), views: 75, purchases: 1 },
    { productId: 'prod-4', date: new Date('2025-09-06'), views: 180, purchases: 9 },
    { productId: 'prod-5', date: new Date('2025-09-05'), views: 40, purchases: 0 },
    { productId: 'prod-5', date: new Date('2025-09-07'), views: 220, purchases: 15 },
    { productId: 'prod-6', date: new Date('2025-09-09'), views: 60, purchases: 2 },
    { productId: 'prod-6', date: new Date('2025-09-10'), views: 130, purchases: 6 },
    { productId: 'prod-7', date: new Date('2025-09-11'), views: 25, purchases: 0 },
  ];

  // Sample VisitorLog data (visits over a 7+ day span)
  const visitorLogs = [
    { sessionId: 'sess-A', ip: '10.0.0.1', userAgent: 'Chrome', path: '/home', country: 'US', createdAt: new Date('2025-09-02T09:15:00Z') },
    { sessionId: 'sess-A', ip: '10.0.0.1', userAgent: 'Chrome', path: '/product/3', country: 'US', createdAt: new Date('2025-09-02T09:18:00Z') },
    { sessionId: 'sess-B', ip: '10.0.0.2', userAgent: 'Firefox', path: '/products', country: 'IN', createdAt: new Date('2025-09-03T11:30:00Z') },
    { sessionId: 'sess-C', ip: '10.0.0.3', userAgent: 'Safari', path: '/products', country: 'GB', createdAt: new Date('2025-09-04T13:45:00Z') },
    { sessionId: 'sess-D', ip: '10.0.0.4', userAgent: 'Edge', path: '/cart', country: 'US', createdAt: new Date('2025-09-05T15:05:00Z') },
    { sessionId: 'sess-E', ip: '10.0.0.5', userAgent: 'Chrome', path: '/checkout', country: 'AU', createdAt: new Date('2025-09-06T17:20:00Z') },
    { sessionId: 'sess-F', ip: '10.0.0.6', userAgent: 'Firefox', path: '/product/5', country: 'CA', createdAt: new Date('2025-09-07T19:40:00Z') },
    { sessionId: 'sess-G', ip: '10.0.0.7', userAgent: 'Safari', path: '/home', country: 'US', createdAt: new Date('2025-09-08T21:55:00Z') },
    // Additional repeat visits and sessions to exercise unique/session counts
    { sessionId: 'sess-B', ip: '10.0.0.2', userAgent: 'Firefox', path: '/product/4', country: 'IN', createdAt: new Date('2025-09-03T11:45:00Z') },
    { sessionId: 'sess-D', ip: '10.0.0.4', userAgent: 'Edge', path: '/home', country: 'US', createdAt: new Date('2025-09-05T15:25:00Z') },
    { sessionId: 'sess-H', ip: '10.0.0.8', userAgent: 'Chrome', path: '/search', country: 'US', createdAt: new Date('2025-09-06T08:00:00Z') },
    { sessionId: 'sess-I', ip: '10.0.0.9', userAgent: 'Edge', path: '/products', country: 'DE', createdAt: new Date('2025-09-07T12:10:00Z') },
    { sessionId: 'sess-J', ip: '10.0.0.10', userAgent: 'Chrome', path: '/product/6', country: 'US', createdAt: new Date('2025-09-09T14:30:00Z') },
  ];

  await prisma.productTrend.createMany({ data: productTrends });
  await prisma.visitorLog.createMany({ data: visitorLogs });

  console.log('Seeded alternate sample data for ProductTrend and VisitorLog');
}

seed().catch(console.error).finally(() => prisma.$disconnect());