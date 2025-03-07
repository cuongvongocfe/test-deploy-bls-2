"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text:slug,
        });
        if (error){
          console.error("error incrementing view count inside try block:", error );
        };
      } catch (error) {
        console.error(
          "An error occurred while trying to increment the view count: ",
          error
        );
      }
    };

    if(!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getView = async () => {
      try {
      
let { data: view, error } = await supabase
.from('view')
.select('count')
.match({slug: slug})
.single()
        if (error){
          console.error("error incrementing view count inside try block:", error );
        };
        
      } catch (error) {
        console.error(
          "An error occurred while trying to increment the view count: ",
          error
        );
      }
    };

    if(!noCount) {
      getView();
    }
  }, [slug, noCount]);

  
  if (showCount) {
    return <div>{views}</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
