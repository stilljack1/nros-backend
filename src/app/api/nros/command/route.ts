import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// CRITICAL FIX: Forces this route to run only on request, not at build time.
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
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
      data: state || { status: "SYSTEM_INITIALIZING" } // Fallback if DB is empty
    });
  } catch (error) {
    console.error("NROS READ ERROR:", error);
    return NextResponse.json({ status: "DB_CONNECTION_ERROR" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, target, actor } = body;

    await prisma.secureLog.create({
      data: {
        action: action,
        actor: actor || "UNKNOWN",
        module: "COMMAND",
        metadata: JSON.stringify(target)
      }
    });

    return NextResponse.json({ success: true, msg: "COMMAND AUTHENTICATED & LOGGED" });
  } catch (error) {
    return NextResponse.json({ error: "WRITE_FAILED" }, { status: 500 });
  }
}
