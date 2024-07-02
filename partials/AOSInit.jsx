"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({

      duration: 800, // values from 0 to 3000, with step 50ms

    
    });
  }, [])

  return null
}