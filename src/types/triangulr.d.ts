declare module 'triangulr' {
  const Triangulr: {
    new (
      width: number,
      height: number,
      lineHeight: number,
      pointArea = 0,
      renderingFunction?: (triangle: { cols: number, counter: number, lines: number, points: { x: number, y: number }[], x: number, y: number }) => string
    ): SVGElement
  }

  export = Triangulr
}