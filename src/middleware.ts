import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Lógica para a rota /projects
  if (pathname.startsWith(`/projects`)) {
    if (!req.headers.get('referer')?.includes(process.env.APP_URL as string)) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  }

  if (pathname === `/secret`) {
    if (!req.cookies.get('token')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  }

  if (pathname === `/secret/${process.env.NEXT_PUBLIC_TOKEN as string}`) {
    const response = NextResponse.redirect(new URL('/secret', req.url));

    response.cookies.set('token', 'teste', {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/secret/:path*', '/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)']
};
