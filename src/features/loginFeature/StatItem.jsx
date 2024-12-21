export default function StatItem({ title, value }) {
  return (
    <div className="text-center">
      <p className="font-bold text-lg">{value}</p>
      <p className="font-normal text-sm">{title}</p>
    </div>
  );
}
