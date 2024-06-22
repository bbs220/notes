const Background = () => {
  return (
    <div className="w-full h-96 flex flex-col justify-center items-center bg-base-100 rounded-2xl gap-y-4">
      <img
        src="./resources/post-it.png"
        alt="notes background"
        className="size-20 md:size-32"
        draggable={false}
      />
      <h1 className="label-text text-2xl lg:text-3xl">No Notes Yet!</h1>
    </div>
  );
};

export default Background;