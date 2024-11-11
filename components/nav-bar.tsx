import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/container";
import Icons from "@/components/icons";

const Navbar = async () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-[9999999]">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <Icons.logo className="w-full" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <>
              <Link
                href="#"
                className={buttonVariants({
                  size: "sm",
                  className: "flex",
                })}
              >
                اِبْدَأِ البَيْعَ الآن
              </Link>
            </>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
