import React from 'react';

const FILTER_ID = 'liquid-glass-filter';

function smoothStep(a: number, b: number, value: number): number {
  const t = Math.max(0, Math.min(1, (value - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function length2(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}

function roundedRectSDF(x: number, y: number, width: number, height: number, radius: number): number {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return Math.min(Math.max(qx, qy), 0) + length2(Math.max(qx, 0), Math.max(qy, 0)) - radius;
}

const LiquidGlassDefs: React.FC = () => {
  const feImageRef = React.useRef<SVGFEImageElement | null>(null);
  const feDisplacementMapRef = React.useRef<SVGFEDisplacementMapElement | null>(null);

  React.useEffect(() => {
    const feImage = feImageRef.current;
    const feDisplacementMap = feDisplacementMapRef.current;
    if (!feImage || !feDisplacementMap) return;

    const size = 192;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d');
    if (!context) return;

    const data = new Uint8ClampedArray(size * size * 4);
    const rawValues: number[] = [];
    let maxScale = 0;

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % size;
      const y = Math.floor(i / 4 / size);
      const uvx = x / size;
      const uvy = y / size;
      const ix = uvx - 0.5;
      const iy = uvy - 0.5;
      const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
      const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
      const scaled = smoothStep(0, 1, displacement);
      const posX = ix * scaled + 0.5;
      const posY = iy * scaled + 0.5;
      const dx = posX * size - x;
      const dy = posY * size - y;
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);
    }

    maxScale *= 0.5;
    let index = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = rawValues[index++] / maxScale + 0.5;
      const g = rawValues[index++] / maxScale + 0.5;
      data[i] = Math.max(0, Math.min(255, Math.round(r * 255)));
      data[i + 1] = Math.max(0, Math.min(255, Math.round(g * 255)));
      data[i + 2] = 0;
      data[i + 3] = 255;
    }

    context.putImageData(new ImageData(data, size, size), 0, 0);
    feImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL());
    feDisplacementMap.setAttribute('scale', (maxScale / 1).toFixed(2));
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none', zIndex: -1 }}
      aria-hidden="true"
    >
      <defs>
        <filter
          id={FILTER_ID}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
          x="-10000"
          y="-10000"
          width="20000"
          height="20000"
        >
          <feImage ref={feImageRef} width="192" height="192" />
          <feDisplacementMap
            ref={feDisplacementMapRef}
            in="SourceGraphic"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LiquidGlassDefs;

