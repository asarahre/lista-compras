import { VariantProps, cva } from "class-variance-authority";

export const tagBase = cva([" text-sm", "rounded-xl", " p-1.5", "px-2.5"], {
  variants: {
    color: {
      orange: "bg-orange-01 text-red-600",
      green: "bg-green-dark text-green-600",
      pink: "bg-pink-dark text-pink-600",
      yellow: "bg-yellow-dark text-yellow-600",
      blue: "bg-blue-dark text-blue-600",
      purple: "bg-purple-dark text-purple-600",
    },
  },
});

interface TagBaseProps extends VariantProps<typeof tagBase> {
  tag: String;
}

export function Tag({ tag, color }: TagBaseProps) {
  return (
    <>
      <div className={tagBase({ color })}>
        <span className=" font-light">{tag}</span>
      </div>
    </>
  );
}
