const ProgressCard = ({ radius, stroke, progress, color }) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={color}
      strokeWidth={stroke}
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      strokeLinecap="round"
    />
  );
};

export default ProgressCard;