// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
//   const [views, setViews] = useState(null); // null indicates loading state

//   useEffect(() => {
//     const updateViews = async () => {
//       try {
//         // Increment view count if noCount is false
//         if (!noCount) {
//           const { error: incrementError } = await supabase.rpc("increment", {
//             slug_text: slug,
//           });
          
//           if (incrementError) {
//             console.error("Error incrementing view count:", incrementError);
//           }
//         }

//         // Fetch the updated view count
//         const { data, error: fetchError } = await supabase
//           .from('views')
//           .select('count')
//           .eq('slug', slug) // Using eq instead of match for clarity
//           .single();

//         if (fetchError) {
//           console.error("Error fetching view count:", fetchError);
//           setViews(0);
//           return;
//         }

//         setViews(data?.count ?? 0);
//       } catch (error) {
//         console.error("Error updating views:", error);
//         setViews(0); // Fallback to 0 on error
//       }
//     };

//     if (slug) { // Only run if slug is provided
//       updateViews();
//     }
//   }, [slug, noCount]);

//   if (!showCount) return null;

//   return (
//     <div>
//       {views === null ? 'Loading...' : `${views} views`}
//     </div>
//   );
// };

// export default ViewCounter;