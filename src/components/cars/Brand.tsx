
import { brands } from "../cars/data/Cars";

export default function Brand() {
  return (
    <section className="overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Brands</h2>

      <div className=" flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-6 md:overflow-x-visible items-center justify-between">
        {brands.map((b) => (
          <div key={b.id} className="bg-white w-40 min-w-28 h-auto p-4 rounded-lg shadow-sm flex flex-col items-center gap-1 cursor-pointer hover:shadow-md transition">
            <img src={b.logo} className="w-10 h-10 object-contain" />
            <p className="font-medium">{b.name}</p>
            <span className="text-blue-600 text-sm">+{b.count}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
