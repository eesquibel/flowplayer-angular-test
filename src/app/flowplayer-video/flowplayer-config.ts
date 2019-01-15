export interface FlowplayerConfig {
  adaptiveRatio?: boolean;
  aspectRatio?: string;
  autoplay?: boolean;
  clip?: FlowplayerConfigClip;
  debug?: boolean;
  disabled?: boolean;
  fullscreen?: boolean;
  keyboard?: boolean;
  live?: boolean;
  muted?: boolean;
  mutedAutoplay?: boolean;
  poster?: boolean | string;
  splash?: boolean | string;
}

export interface FlowplayerConfigClip {
  live?: boolean;
  sources: FlowplayerConfigClipSource[];
  title?: string;
}

export interface FlowplayerConfigClipSource {
  engine?: 'ogg' | 'mp4' | 'hls' | 'webm';
  type: 'application/x-mpegurl' | 'video/webm' | 'video/mp4' | 'video/flash';
  src: string;
}
