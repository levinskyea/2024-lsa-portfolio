const OutlineButton = ({ title }: { title: string }) => {
  return (
    <button className="px-10 py-1 rounded-full border border-neutral-600 text-white " disabled>
      {title}
    </button>
  );
};

export default OutlineButton;
