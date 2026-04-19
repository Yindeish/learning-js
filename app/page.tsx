"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import {
  BatteryMedium,
  ChevronLeft,
  ChevronRight,
  Flame,
  Home,
  Menu,
  MessageCircle,
  Plus,
  Search,
  ShoppingBag,
  Signal,
  UserRound,
  Wifi,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const slides = [
  {
    alt: "Samsung phones",
    products: [
      {
        src: "https://i.ibb.co/JbRgbhV/Samsung-Galaxy-S8.jpg",
        className: "left-3 top-[118px] w-[72px] -rotate-2 float-fast",
      },
      {
        src: "https://i.ibb.co/cRPjZ6B/Samsung-Galaxy-S9.jpg",
        className: "left-[70px] top-[126px] w-[70px] rotate-[1deg] float-slow",
      },
      {
        src: "https://i.ibb.co/xtVJkCMQ/Samsung-Galaxy-Note-20.jpg",
        className: "left-[142px] top-[88px] w-[108px] rotate-[1deg] float-delay",
      },
      {
        src: "https://i.ibb.co/GfyQZrtk/Samsung-Galaxy-S21.jpg",
        className: "left-[216px] top-[100px] w-[88px] rotate-[4deg] float-fast",
      },
      {
        src: "https://i.ibb.co/BHGNB3NP/Bulkcell-Trading-Company-9.jpg",
        className: "right-1 top-[116px] w-[90px] rotate-[1deg] float-slow",
      },
    ],
  },
  {
    alt: "Laptop collection",
    products: [
      {
        src: "https://i.ibb.co/Kxx9pNc7/HP-Elite-Book-1030-G2-X360.jpg",
        className: "left-6 top-[114px] w-[118px] -rotate-12 float-fast",
      },
      {
        src: "https://i.ibb.co/ccTpwCVB/Dell-Latitude-Bulkcell-TC.jpg",
        className: "left-[108px] top-[118px] w-[162px] -rotate-[7deg] z-10 float-slow",
      },
      {
        src: "https://i.ibb.co/67BZJTp6/HP-Elite-Book-Bulkcell-TC.webp",
        className: "right-4 top-[144px] w-[126px] rotate-[4deg] float-delay",
      },
    ],
  },
];

const navItems = [
  { icon: Home, label: "HOME", active: true },
  { icon: ShoppingBag, label: "SHOP NOW" },
  { icon: Flame, label: "HOT DEALS" },
  { icon: MessageCircle, label: "CHAT" },
];

const statusIcons = [Signal, Wifi, BatteryMedium];
const tileRows = 5;
const tileColumns = 7;

type Product = (typeof slides)[number]["products"][number];
type Slide = (typeof slides)[number];

function SlideScene({
  products,
  className = "",
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-x-0 bottom-[38px] h-8 rounded-full bg-[radial-gradient(circle,_rgba(9,12,63,0.45),_rgba(9,12,63,0)_70%)] blur-md" />

      {products.map((product) => (
        <img
          key={product.src}
          src={product.src}
          alt=""
          className={`absolute object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.35)] ${product.className}`}
        />
      ))}
    </div>
  );
}

function GridScatterSlide({ slide, slideIndex }: { slide: Slide; slideIndex: number }) {
  const tiles = Array.from({ length: tileRows * tileColumns }, (_, index) => {
    const row = Math.floor(index / tileColumns);
    const column = index % tileColumns;

    return { index, row, column };
  });

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0.82, scale: 1.02, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {tiles.map(({ index, row, column }) => {
        const horizontalCenter = column - (tileColumns - 1) / 2;
        const verticalCenter = row - (tileRows - 1) / 2;
        const directionBoost = slideIndex % 2 === 0 ? 1 : -1;

        const scatterX = horizontalCenter * 36 + directionBoost * (12 + row * 3);
        const scatterY = verticalCenter * 34 - 26 + column * 1.5;
        const scatterRotate = horizontalCenter * 8 + verticalCenter * 5;
        const delay = index * 0.012;

        return (
          <motion.div
            key={`${slide.alt}-${index}`}
            className="absolute overflow-hidden"
            style={{
              left: `${(column / tileColumns) * 100}%`,
              top: `${(row / tileRows) * 100}%`,
              width: `${100 / tileColumns}%`,
              height: `${100 / tileRows}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              x: scatterX,
              y: scatterY,
              rotate: scatterRotate,
              scale: 0.84,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.5,
              delay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                width: `${tileColumns * 100}%`,
                height: `${tileRows * 100}%`,
                left: `-${column * 100}%`,
                top: `-${row * 100}%`,
              }}
            >
              <SlideScene products={slide.products} />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <main
      className={`${poppins.className} min-h-screen bg-[radial-gradient(circle_at_top,_#173670,_#09162e_60%)] px-0 py-0 text-white md:flex md:items-center md:justify-center md:p-6`}
    >
      <div className="relative min-h-screen w-full overflow-hidden bg-[#0d1020] md:min-h-[820px] md:max-w-[390px] md:rounded-[38px] md:shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <section className="bg-[#071019] px-5 pb-3 pt-3">
          <div className="mb-3 flex items-center justify-between text-[11px] font-medium">
            <div className="flex items-center gap-1.5 text-white/90">
              <span>9:01</span>
              <span className="text-[10px]">◌</span>
              <span className="text-[10px]">◌</span>
              <span className="text-[10px]">◌</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90">
              <span className="text-[10px] font-semibold">(Vo)</span>
              {statusIcons.map((Icon, index) => (
                <Icon key={index} className="h-3.5 w-3.5" strokeWidth={2.2} />
              ))}
              <span className="text-[11px] font-semibold">32%</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Home className="h-5 w-5 shrink-0 text-white/90" strokeWidth={2.2} />

            <div className="flex h-11 flex-1 items-center gap-2 rounded-full bg-white/16 px-4 text-white/85 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
              <div className="flex w-5 flex-col gap-[3px]">
                <span className="h-0.5 w-4 rounded bg-white/70" />
                <span className="h-0.5 w-3 rounded bg-white/45" />
              </div>
              <span className="text-[17px] font-medium tracking-[-0.02em]">
                bulkcell.com.ng
              </span>
            </div>

            <Plus className="h-6 w-6 shrink-0 text-white/90" strokeWidth={2.3} />
            <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/60 text-[10px] font-semibold text-white/90">
              27
            </div>
            <Menu className="h-5 w-5 shrink-0 text-white/90" strokeWidth={2.3} />
          </div>
        </section>

        <section className="bg-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/03MSj6G/icon.png"
                alt="Bulkcell icon"
                className="h-11 w-11 object-contain"
              />
              <div>
                <div className="text-[17px] font-bold leading-none tracking-[-0.03em] text-[#1a2342]">
                  BULKCELL
                </div>
                <div className="mt-1 text-[7px] font-semibold tracking-[0.32em] text-[#5f6475]">
                  TRADING COMPANY
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[#5d5d66]">
              <Search className="h-6 w-6" strokeWidth={2} />
              <UserRound className="h-5 w-5" strokeWidth={2} />
              <Menu className="h-7 w-7" strokeWidth={1.9} />
            </div>
          </div>
        </section>

        <section className="relative min-h-[calc(100vh-136px)] overflow-hidden bg-[#173676] pb-28 md:min-h-[684px]">
          <div className="px-3 pt-7">
            <div className="mb-7 overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`cta-${activeSlide}`}
                  initial={{ x: -72, opacity: 0.7 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 72, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                  className="flex gap-4"
                >
                  <button className="h-[82px] w-[156px] rounded-[16px] bg-[#ef2632] text-[17px] font-semibold tracking-[-0.02em] text-white shadow-[0_10px_30px_rgba(210,12,30,0.28)]">
                    Shop Now
                  </button>
                  <button className="h-[82px] w-[176px] rounded-[18px] border border-white/20 bg-transparent text-[17px] font-semibold tracking-[-0.02em] text-white/90 shadow-[inset_0_0_0_2px_rgba(132,155,225,0.35)]">
                    Learn More
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative mx-auto h-[510px] rounded-[2px] bg-[#173676]">
              <div className="relative h-[366px] overflow-hidden bg-[#173676]">
                <div className="absolute inset-x-3 top-3 h-[340px] overflow-hidden rounded-[2px] bg-[radial-gradient(circle_at_50%_48%,_#36beff_0%,_#285dff_28%,_#16056f_70%,_#12084b_100%)]">
                  <AnimatePresence initial={false} mode="sync">
                    <GridScatterSlide
                      key={slides[activeSlide].alt}
                      slide={slides[activeSlide]}
                      slideIndex={activeSlide}
                    />
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={showPreviousSlide}
                    className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/14 text-white/90 backdrop-blur-sm"
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={2.6} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextSlide}
                    className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/14 text-white/90 backdrop-blur-sm"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={2.6} />
                  </button>
                </div>

                <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`block rounded-full transition-all duration-300 ${
                        index === activeSlide
                          ? "h-[9px] w-10 bg-[#ff3b30]"
                          : "h-[9px] w-[9px] bg-white/35"
                      }`}
                    />
                  ))}
                  <span className="block h-[9px] w-[9px] rounded-full bg-white/22" />
                  <span className="block h-[9px] w-[9px] rounded-full bg-white/18" />
                </div>
              </div>

              <div className="pt-24 text-center">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#31267f] px-6 py-2.5 text-[16px] font-medium text-[#fd4c45] shadow-[0_10px_24px_rgba(25,15,95,0.35)]">
                  <span className="text-lg">⚡</span>
                  <span>Limited Time Offer</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="absolute inset-x-4 bottom-5 rounded-[22px] bg-white px-5 py-3 text-[#67676f] shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-4 items-center">
              {navItems.map(({ icon: Icon, label, active }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Icon
                    className={`h-7 w-7 ${active ? "text-[#f2323b]" : "text-[#67676f]"}`}
                    strokeWidth={1.9}
                  />
                  <span
                    className={`text-[11px] font-semibold ${
                      active ? "text-[#f2323b]" : "text-[#4f4f57]"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </nav>

          <div className="absolute bottom-1 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/60 md:hidden" />
        </section>
      </div>
    </main>
  );
}
