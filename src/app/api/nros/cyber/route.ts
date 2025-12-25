import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  // Receive Threat Intel from external sensors
  const body = await req.json();
  
  const incident = await prisma.cyberIncident.create({
    data: {
      vector: body.vector,
      target: body.target,
      severity: body.severity,
      status: "ACTIVE"
    }
  });

  return NextResponse.json({ alertId: incident.id, status: "THREAT_LOGGED" });
}
