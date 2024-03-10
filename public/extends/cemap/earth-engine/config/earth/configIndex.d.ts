export interface EarthConfig {
    el?: string;
    animation?: boolean;
    baseLayerPicker?: boolean;
    fullscreenButton?: boolean;
    geocoder?: boolean;
    homeButton?: boolean;
    infoBox?: boolean;
    sceneModePicker?: boolean;
    selectionIndicator?: boolean;
    timeline?: boolean;
    navigationHelpButton?: boolean;
    navigationInstructionsInitiallyVisible?: boolean;
    automaticallyTrackDataSourceClocks?: boolean;
    defaultView?: {
        lon?: number,
        lat?: number,
        alt?: number,
        heading?: number,
        pitch?: number,
        roll?: number,
    };
    initViewMode?: string;
}

declare function EarthConfig(): EarthConfig;

