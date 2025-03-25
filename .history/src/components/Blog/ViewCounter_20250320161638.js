"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState, useCallback } from "react";

// Initialize Supabase client outside component
const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  // Combine increment and fetch into one memoized function
  const updateViews = useCallback(async () => {
    if (!slug) return; // Early return if no slug

    try {
      // Only increment if noCount is false
      if (!noCount) {
        const { error: incrementError } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (incrementError) throw new Error(`Increment failed: ${incrementError.message}`);
      }

      // Fetch current view count
      const { data, error: fetchError } = await supabase
        .from('view') // Assuming 'view' is correct table name (was 'views' in previous versions)
        .select('count')
        .eq('slug', slug) // Changed from match to eq for consistency
        .single();

      if (fetchError) throw new Error(`Fetch failed: ${fetchError.message}`);

      setViews(data?.count ?? 0);
    } catch (error) {
      console.error("ViewCounter error:", error.message);
      setViews(0);
    }
  }, [slug, noCount]);

  useEffect(() => {
    updateViews();
  }, [updateViews]);

  // Simplified conditional rendering
  return showCount ? <div>{views} view{views === 1 ? '' : 's'}</div> : null;
};

export default ViewCounter;