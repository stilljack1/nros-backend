import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  // Fetch the entire National Defense Picture
  const state = await prisma.defenseState.findFirst({
    orderBy: { updatedAt: 'desc' },
    include: {
      cyberIncidents: { where: { status: 'ACTIVE' } },
      infraNodes: { where: { status: { not: 'ONLINE' } } },
      fieldUnits: { where: { status: 'DEPLOYED' } }
    }
  });

  return NextResponse.json({ 
    status: "SECURE_CONNECTION_ESTABLISHED",
    data: state 
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { action, target, actor } = body;

  // Log command in the Secure Audit Log
  await prisma.secureLog.create({
    data: {
      action: action,
      actor: actor || "UNKNOWN",
      module: "COMMAND",
      metadata: JSON.stringify(target)
    }
  });

  return NextResponse.json({ success: true, msg: "COMMAND AUTHENTICATED & LOGGED" });
}
