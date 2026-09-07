export default function Profile() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative aspect-square h-64 w-64 rounded-full bg-neutral-100">
        <img
          src="/profile/profile.jpg"
          alt="Kyle Eva"
          className="absolute bottom-0 rounded-2xl left-1/2 h-[115%] w-auto max-w-none -translate-x-1/2 object-cover object-bottom transition-transform duration-300 ease-out hover:scale-[1.03]"
          loading="eager"
        />
      </div>
    </div>
  );
}
