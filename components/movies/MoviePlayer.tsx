"use client";

import { useEffect, useRef } from "react";
import Plyr from "plyr";
import Hls from "hls.js";
import "plyr/dist/plyr.css";

interface MoviePlayerProps {
  src: string;
  poster: string;
}

export default function MoviePlayer({ src, poster }: MoviePlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported() && src.endsWith(".m3u8")) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else {
      video.src = src;
    }

    playerRef.current = new Plyr(video, {
      controls: [
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "settings",
        "fullscreen",
      ],
      settings: ["quality", "speed"],
      speed: { selected: 1, options: [0.5, 1, 1.25, 1.5, 2] },
    });

    return () => {
      playerRef.current?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="plyr-react plyr"
      playsInline
      poster={poster}
    />
  );
}
