'use client';
import { useEffect } from 'react';
import { WOW } from 'wowjs'; // ✅ Імпортуємо як default

export default function useWow(): void {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // new WOW().init(); // ✅ Викликаємо без WOW.WOW()
    }
  }, []);
}
