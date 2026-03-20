declare module "jquery.ripples" {
  interface RipplesOptions {
    imageUrl?: string;
    dropRadius?: number;
    perturbance?: number;
    resolution?: number;
    interactive?: boolean;
    crossOrigin?: string;
  }

  global {
    interface JQuery {
      ripples(options?: RipplesOptions): JQuery;
      ripples(
        action: "drop",
        x: number,
        y: number,
        radius: number,
        strength: number,
      ): JQuery;
      ripples(action: "destroy" | "show" | "hide" | "pause" | "play"): JQuery;
      ripples(action: "set", property: string, value: any): JQuery;
    }
  }
}
