function RiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex aspect-1/2 h-[100vw] -rotate-90 md:aspect-1/2 md:h-screen md:rotate-0">
      {children}
    </div>
  );
}

export default RiveContainer;
