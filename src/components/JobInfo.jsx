const JobInfo = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 text-white text-lg font-bold">
      <span className="text-4xl">{icon}</span>
      <span className="capitalize tracking-wide">{text}</span>
    </div>
  );
};

export default JobInfo;
