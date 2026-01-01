export default function RedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#3d0a0a] via-[#2a0808] to-[#1a0505]">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSIjZmY0NDQ0IiBmaWxsLW9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')] bg-[length:40px_40px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ff0000,transparent_70%)] opacity-[0.05]" />
    </div>
  );
}
