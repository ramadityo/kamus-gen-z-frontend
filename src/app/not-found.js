export default function NotFound() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="space-y-4">
        <h1 className="font-sans font-bold capitalize text-center text-blue mobile:text-3xl tablet:text-4xl desktop:text-5xl text-9xl">
          404
        </h1>
        <p className="font-sans font-medium text-red text-center text-3xl">
          Halaman yang kamu tuju tidak ditemukan!
        </p>
      </div>
    </div>
  );
}
