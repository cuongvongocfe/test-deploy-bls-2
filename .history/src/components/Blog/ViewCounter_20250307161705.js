"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { data, error } = await supabase.rpc("increment", {
          slug_text,
        });
        if (error) console.error(error);
        else console.log(data);
      } catch (error) {
        console.error(
          "An error occurred while trying to increment the view count: ",
          error
        );
      }
    };
  }, []);

  if (showCount) {
    return <div>{views}</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
