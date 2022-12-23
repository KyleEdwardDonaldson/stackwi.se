import { NextRequest } from 'next/dist/server/web/spec-extension/request';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
   if (req.nextUrl.pathname.startsWith('/public')) {
      // Rewrite /api/public... to /public...
      const url = req.nextUrl.clone()
      url.pathname = '/api' + req.nextUrl.pathname;

      return NextResponse.rewrite(url);
    }  
}