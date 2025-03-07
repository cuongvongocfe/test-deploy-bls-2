"use client";
import React, { useEffect, useState, useCallback } from "react";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (move outside component for better practice)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Separate loading state
  const [hasError, setHasError] = useState(false); // Error tracking

  // Memoize the updateViews function to prevent unnecessary re-creations
  const updateViews = useCallback(async () => {
    if (!slug) return;

    try {
      setIsLoading(true);
      setHasError(false);

      // Only increment if noCount is false
      if (!noCount) {
        const { error: incrementError } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        
        if (incrementError) throw new Error(`Increment failed: ${incrementError.message}`);
      }

      // Fetch view count with proper error handling
      const { data, error: fetchError } = await supabase
        .from('views')
        .select('count')
        .eq('slug', slug)
        .single();

      if (fetchError) throw new Error(`Fetch failed: ${fetchError.message}`);

      setViews(data?.count ?? 0);
    } catch (error) {
      console.error("View counter error:", error.message);
      setViews(0);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [slug, noCount]);

  // Effect to trigger view updates
  useEffect(() => {
    updateViews();
  }, [updateViews]);

  if (!showCount) return null;

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : hasError ? (
        'Error loading views'
      ) : (
        `${views} view${views === 1 ? '' : 's'}` // Pluralization
      )}
    </div>
  );
};

export default ViewCounter;