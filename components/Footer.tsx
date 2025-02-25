import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Copyright © 2025 - Created by{" "}
        <Link href="https://martagg.com">@Marta</Link>
      </span>
      <span>
        Powered by{" "}
        <Link
          href={
            "https://res.cloudinary.com/martacloud/image/upload/v1697536635/Captura_de_pantalla_2023-10-17_a_las_11.47.21_wkvmnd.png"
          }
        >
          The fam
        </Link>
      </span>
    </footer>
  );
};
