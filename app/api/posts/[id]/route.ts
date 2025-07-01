import { NextResponse } from "next/server";

import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = headers();
  const type = (await headerList).get("Content-Type");

  const cookieList = cookies();
  const coo1 = (await cookieList).get("Cookie_1")?.value;

  //   redirect("/blog")

  return NextResponse.json({ id, type, coo1 });
}
