import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[10vh] border-b border-white/[.13] border-solid flex items-center justify-between fixed z-20 bg-primary px-4">
      {/* Logo aligned to the left */}
      <div className="flex items-center">
        <img
          src="/images/zephyr_logo.png"
          alt="Logo"
          className="cursor-pointer w-[90px] h-[90px] object-contain" // Increased size to 80px
          onClick={async () => {
            router.pathname !== '/' && (await router.push('/'));
            document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />
      </div>

      {/* Navbar Links */}
      <div className="flex items-center gap-8">
        <Link href="/" legacyBehavior>
          <a className="text-white cursor-pointer select-none sm:block">Home</a>
        </Link>
        <Link href="/events" legacyBehavior>
          <a className="text-white cursor-pointer select-none sm:block">Events</a>
        </Link>
        <span
          onClick={async () => {
            router.pathname !== '/' && (await router.push('/#prizes'));
            let element = document.getElementById('prizes');
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="text-white cursor-pointer select-none sm:block"
        >
          Prizes
        </span>
        <span
          onClick={async () => {
            router.pathname !== '/' && (await router.push('/#aboutus'));
            let element = document.getElementById('aboutus');
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="text-white cursor-pointer select-none sm:block"
        >
          About Us
        </span>
        <div
          onClick={() => {
            window.open('./images/code.pdf', '_blank');
          }}
          className="px-6 py-2 rounded-full cursor-pointer bg-gradient-to-b from-gradientTop to-gradientBottom text-white"
        >
          Code of Conduct
        </div>
      </div>
    </div>
  );
};

export default Navbar;
