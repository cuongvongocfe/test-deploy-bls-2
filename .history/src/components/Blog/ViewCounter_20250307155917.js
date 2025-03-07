"use client";
import React, { useEffect, useState, useCallback } from "react";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client outside component (single instance)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Validate environment variables once at startup
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('Supabase configuration missing');
}

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(null);

  // Memoize the updateViews function
  const updateViews = useCallback(async () => {
    if (!slug) return; // Early return if no slug

    try {
      // Increment view count if not disabled
      if (!noCount) {
        const { error: incrementError } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (incrementError) throw incrementError;
      }

      // Fetch updated view count
      const { data, error: fetchError } = await supabase
        .from('views')
        .select('count')
        .eq('slug', slug)
        .single();

      if (fetchError) throw fetchError;

      setViews(data?.count ?? 0);
    } catch (error) {
      console.error("ViewCounter error:", error.message);
      setViews(0);
    }
  }, [slug, noCount]);

  useEffect(() => {
    updateViews();
  }, [updateViews]);

  if (!showCount) return null;

  return (
    <div>
      {views === null ? 'Loading...' : `${views} view${views === 1 ? '' : 's'}`}
    </div>
  );
};

export default ViewCounter;