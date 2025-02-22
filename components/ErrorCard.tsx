export const ErrorCard = ({
  message,
  resetError,
}: {
  message: string;
  resetError: () => void;
}) => {
  return (
    <div className="overlay">
      <div className="overlayCard">
        <h3>{message}</h3>
        <button className="lightBtn" onClick={resetError}>
          Try again
        </button>
      </div>
    </div>
  );
};
