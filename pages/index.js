
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center">
      <Image src="/logo.png" width={80} height={80} alt="Logo CleanDoc Pro" />
      <h1 className="text-4xl font-bold text-blue-700 mt-4">CleanDoc Pro</h1>
      <p className="mt-2 text-gray-600">Twoje narzędzie do tworzenia dokumentacji higieny i dezynfekcji</p>
    </div>
  );
}
