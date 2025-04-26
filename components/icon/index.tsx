"use client";

import {
  useEffect,
  useReducer,
  useRef,
  useState,
  SVGProps,
  JSX,
  FC,
} from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  width?: number;
  height?: number;
}

const Icon = ({
  name,
  width = 21,
  height = 21,
  ...props
}: IconProps): JSX.Element => {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const importIcon = async () => {
      try {
        setLoading(true);
        const { default: IconComponent } = await import(`./icons/${name}.svg`);
        ImportedIconRef.current = IconComponent;
        forceUpdate();
      } catch (err) {
        console.error(`Error loading icon "${name}":`, err);
      } finally {
        setLoading(false);
      }
    };

    importIcon();
  }, [name]);

  const ImportedIcon = ImportedIconRef.current;

  if (loading) {
    return (
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: "lightgrey",
          filter: "blur(6px)",
          transition: "opacity 0.4s ease",
        }}
      />
    );
  }

  if (!ImportedIcon) {
    return <div style={{ color: "red" }}>Icon not found</div>;
  }

  return <ImportedIcon width={width} height={height} {...props} />;
};

export default Icon;
