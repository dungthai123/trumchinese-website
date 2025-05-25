import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // Get the secret token from the request
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');
    
    // Verify the webhook secret (you should set this in your environment variables)
    const webhookSecret = process.env.WORDPRESS_WEBHOOK_SECRET || 'your-secret-key';
    
    if (token !== webhookSecret) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Get the post data from the webhook
    const body = await request.json();
    const { post_id, post_slug, action } = body;

    console.log(`Revalidating for action: ${action}, post: ${post_slug || post_id}`);

    // Revalidate the blog pages
    revalidatePath('/blog');
    
    // If we have a specific post slug, revalidate that page too
    if (post_slug) {
      revalidatePath(`/blog/${post_slug}`);
    }

    // Revalidate the home page if it shows recent posts
    revalidatePath('/');

    return NextResponse.json({ 
      message: 'Revalidation successful',
      revalidated: true,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 